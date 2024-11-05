export const useUserInfoStore = defineStore('userStore', {
    state: () => ({
        isLogin: false, // 是否登录
        userName: '', // 显示用户名
        phone: '', // 手机号
        email: '', // 邮箱
    }),
    actions: {
        logout() {
            const config = useRuntimeConfig()
            const logoutUrl = config.public.logoutUrl
            const originUrl = window.location.origin
            this.isLogin = false
            this.userName = ''
            navigateTo(`${logoutUrl}${originUrl}`)
        },
    },
    persist: import.meta.client && {
        storage: localStorage,
    },
})
