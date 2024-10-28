export const useResourceStore = defineStore('resourceStore', {
    state: () => ({
        getFlag: false,
        resourceList: [],
        productionTree: [],
        solutionTree: [],
        caseTree: [],
    }),
    actions: {
        async fetch() {
            // 获取资源列表
            // const resourceRes: any = await getFetchData({
            //     url: '/gateway/portal/open/master/units',
            //     method: 'post',
            //     body: {
            //         type: 'case,policy,product,financial',
            //     },
            // })
            // if (resourceRes.code === 200) {
            //     this.resourceList = resourceRes.data
            // }

            // 获取产品树
            const productRes: any = await getFetchData({
                url: '/gateway/portal/open/tree/product',
            })
            if (productRes.code === 200) {
                this.productionTree = productRes.data
            }

            // // 获取方案树
            // const solutionTree: any = await getFetchData({
            //     url: '/gateway/portal/open/tree/solution',
            // })
            // if (solutionTree.code === 200) {
            //     this.solutionTree = solutionTree.data
            // }

            // // 获取案例树
            // const caseRes: any = await getFetchData({
            //     url: '/gateway/portal/open/tree/case',
            // })
            // if (caseRes.code === 200) {
            //     this.caseTree = caseRes.data
            // }
        },
    },
})
