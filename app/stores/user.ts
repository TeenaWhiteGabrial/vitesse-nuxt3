export const useUserInfoStore = defineStore('userStore', {
    state: () => ({
        isLogin: false, // 是否登录
        userName: '', // 显示用户名
    }),
    actions: {
        logout() {
            this.isLogin = false
            this.userName = ''
        },
    },
    // persist: import.meta.client && {
    //     storage: localStorage,
    // },
})
