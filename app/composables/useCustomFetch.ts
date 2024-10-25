/* eslint-disable ts/ban-ts-comment */
import type { NitroFetchRequest } from 'nitropack'
import type { FetchOptions } from 'ofetch'

interface Params {
    url: NitroFetchRequest
    opts: FetchOptions<any>
    method?: 'get' | 'post'
    hasToken?: boolean
    contentType?: 'application/x-www-form-urlencoded' | 'application/json'
}

// 转换动态接口，兼容类似'/article/:id'这样的动态接口
function replacePathVariables(url: NitroFetchRequest, params: any = {}) {
    if (Object.keys(params).length === 0) {
        return url
    }
    const regex = /\/:(\w+)/g
    let formattedURL = url as string
    let m = regex.exec(formattedURL)
    while (m) {
        if (m.index === regex.lastIndex) {
            regex.lastIndex += 1
        }
        // @ts-ignore
        if (params[m[1]] === undefined) {
            throw new Error(`"${m[1]}" is not provided in params`)
        }
        // @ts-ignore
        formattedURL = formattedURL.replace(`:${m[1]}`, params[m[1]])
        // @ts-ignore
        delete params[m[1]]
        m = regex.exec(formattedURL)
    }
    return formattedURL
}

export async function getFetchData({
    url,
    opts,
    method = 'get',
    hasToken = false, // 请求携带token
    contentType = 'application/json',
}: Params) {
    const config = useRuntimeConfig()
    const requestURL = replacePathVariables(url, opts)
    const { data } = await useFetch(requestURL, {
        method,
        // ofetch库会自动识别请求地址，对于url已包含域名的请求不会再拼接baseURL
        // @ts-ignore
        baseURL: config.public.apiBase,
        // onRequest相当于请求拦截
        onRequest({ options }) {
            // 设置请求头
            options.headers = { 'Content-Type': contentType }
            if (hasToken === true) {
                options.headers.Authorization = ``
            }
            // 设置请求参数
            if (method === 'post') {
                options.body = { ...opts }
            }
            else {
                options.query = { ...opts }
            }
        },
        // onResponse相当于响应拦截
        onResponse({ response }) {
            // 处理响应数据
            if (response._data.error) {
                console.warn(
                    '=== error url: ',
                    url,
                    '\n params:',
                    opts,
                    '\n response:',
                    response._data,
                )
            }
            else {
                return response
            }
        },
        // eslint-disable-next-line unused-imports/no-unused-vars
        onRequestError({ request, options, error }) {
            // 处理请求错误
        },
        // eslint-disable-next-line unused-imports/no-unused-vars
        onResponseError({ request, response, options }) {
            // 处理响应错误
        },
    })
    // 这里data本身是个ref对象，将其内部值抛出去方便调用时获得数据。这里确定值是Response类型
    return data.value
}
