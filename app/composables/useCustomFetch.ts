import type { FetchOptions, ResponseType } from 'ofetch'
import type { ApiResponse } from '~/types'

// 自定义 useFetch 选项类型
interface CustomFetchOptions<T extends ResponseType> extends FetchOptions<T> {
    method?: 'GET' | 'POST'
    withoutToken?: boolean
}

// 自定义 useFetch composable
export async function useCustomFetch<T extends ResponseType>(path: string, options: CustomFetchOptions<T> = {}) {
    // 获取 token（如果不需要 token，则为 null）
    const token = options.withoutToken ? null : useCookie('token').value
    // 全局的 baseURL
    const config = useRuntimeConfig()
    const BASE_URL = config.public.apiBase

    // 配置默认选项
    const defaultOptions: CustomFetchOptions<T> = {
        method: 'GET',
        headers: token ? { Authorization: `Bearer ${token}` } : {},
        baseURL: BASE_URL, // 设置默认 baseURL
        ...options,
    }

    const { data } = await useFetch<ApiResponse<T>>(path, {
        ...defaultOptions,
        async onResponse({ response }) {
            const { code, msg, data } = response._data

            if (code === 200) {
                return { code, msg, data }
            }
            else if (code === 401) {
                // 未授权，跳转到登录页面
            }
            else if (code === 500) {
                // 服务器错误，弹窗提示
            }
            else {
                // 其他错误，抛出错误消息
                throw new Error(msg || '请求失败')
            }
        },
        // 错误处理
        onResponseError() {

        },
    })
    return data.value
}
