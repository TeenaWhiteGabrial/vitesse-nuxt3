import { type ResponceResult } from '#/fetch'

export default defineNuxtPlugin(async (nuxtApp) => {
    // 网站数据的初始化操作，获取网站标题、icon、联系方式等信息
    // const initialData: ResponceResult = await $fetch('/open/site/info', {
    //     baseURL: 'http://localhost:8080/'
    // })
    // const { data } = initialData
    // nuxtApp.provide('initialData', data) // 使用依赖注入储存在上下文中
})
