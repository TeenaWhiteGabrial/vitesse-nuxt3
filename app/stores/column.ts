export const useUserInfoStore = defineStore('resourceStore', {
    state: () => ({
        resourceList: [],
        productionList: [],
        solutionList: [],
        caseList: [],
    }),
    actions: {
        async fetch() {
            const resourceData: any = await getFetchData({
                url: '/gateway/site',
                opts: {},
            })
            if (resourceData.code === 200) {
                this.resourceList = resourceData.data
            }
        },
    },
})
