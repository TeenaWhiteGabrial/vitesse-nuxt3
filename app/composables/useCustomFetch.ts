import type { FetchOptions, ResponseType } from 'ofetch'
import type { ApiResponse } from '~/types'

// 自定义 useFetch 选项类型
interface CustomFetchOptions<T extends ResponseType> extends FetchOptions<T> {
    method?: 'GET' | 'POST'
    withoutToken?: boolean
    server?: boolean
}

/**
 *   自定义 useFetch composable
 *   T 表示响应类型而 R 表示数据类型
 */
export async function useCustomFetch<R, T extends ResponseType = 'json'>(
    path: string,
    options: CustomFetchOptions<T> = {},
) {
    const token = options.withoutToken ? null : useCookie('token').value
    const config = useRuntimeConfig()
    const BASE_URL = config.public.apiBase

    const defaultOptions: CustomFetchOptions<T> = {
        method: 'GET',
        headers: token ? { Authorization: `Bearer ${token}` } : {},
        baseURL: BASE_URL,
        ...options,
    }

    const { data } = await useFetch<ApiResponse<R>>(path, {
        ...defaultOptions,
        onResponse({ response }) {
            const { code, msg, data } = response._data
            if (code === 200) {
                ElMessage('This is a message.')
                return { code, msg, data }
            }
            else if (code === 401) {
                // Handle unauthorized
            }
            else if (code === 500) {
                // Handle server error
            }
            else {
                throw new Error(msg || '请求失败')
            }
        },
        onResponseError() {
            // Handle response errors
        },
    })

    return data.value
}
