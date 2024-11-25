export const useWebsiteStore = defineStore('websiteStore', {
    state: () => ({
        name: '', // 网站名称，无描述时显示名称
        description: '', // 网站描述
        icon: '', // 网站图标
        logo: '', // 网站logo
        mobileLogo: '', // 移动端LOGO

        friendLinks: [], // 友情链接
        statements: [], // 法律条款等
        filing: [], // 备案信息
        contacts: [], // 联系我们
        follows: [], // 二维码
    }),
    actions: {
        async fetch() {
            const resData: any = await useCustomFetch('/gateway/site')

            if (resData.code === 200) {
                this.name = resData.data.name
                this.description = resData.data.description
                this.icon = resData.data.icon
                this.logo = resData.data.logo
                this.mobileLogo = resData.data.backlogo
                this.friendLinks = resData.data.links?.FRIENDLYLINK
                this.statements = resData.data.links?.STATEMENT
                this.filing = resData.data.links?.FILING
                this.contacts = resData.data.links?.CONTACTUS
                this.follows = resData.data.links?.FOLLOWUS
            }
        },
    },
    // persist: import.meta.client && {
    //     storage: localStorage,
    // },
})
