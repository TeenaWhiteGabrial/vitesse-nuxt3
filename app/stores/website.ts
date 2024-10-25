export const useWebsiteStore = defineStore('websiteStore', {
    state: () => ({
        name: '', // 网站名称，无描述时显示名称
        description: '', // 网站描述
        icon: '', // 网站图标
        logo: '', // 网站logo
        mobileLogo: '', // 移动端LOGO
    }),
    actions: {
        async fetch() {
            const resData: any = await getFetchData({
                url: '/gateway/site',
                opts: {},
            })
            if (resData.code === 200) {
                this.name = resData.data.name
                this.description = resData.data.description
                this.icon = resData.data.icon
                this.logo = resData.data.logo
                this.mobileLogo = resData.data.backlogo
            }
        },
    },
    // persist: import.meta.client && {
    //     storage: localStorage,
    // },
})
