export const useResourceStore = defineStore('resourceStore', {
    state: () => ({
        resourceList: [],
        productionTree: [],
        solutionTree: [],
        caseTree: [],
    }),
    actions: {
        // 获取资源列表
        async getResourceList() {
            const resourceRes: any = await useCustomFetch('/gateway/portal/open/master/units', {
                method: 'POST',
                body: {
                    type: 'case,policy,product,content',
                },
            })
            if (resourceRes.code === 200) {
                this.resourceList = resourceRes.data
            }
        },
        async getProductionTree() {
            // 获取产品树
            const productRes: any = await useCustomFetch('/gateway/portal/open/tree/product')
            if (productRes.code === 200) {
                this.productionTree = productRes.data
            }
        },
        async getSolutionTree() {
            // 获取方案树
            const solutionTree: any = await useCustomFetch('/gateway/portal/open/tree/solution')
            if (solutionTree.code === 200) {
                this.solutionTree = solutionTree.data
            }
        },
        async getCaseTree() {
            // 获取案例树
            const caseRes: any = await useCustomFetch('/gateway/portal/open/tree/case')
            if (caseRes.code === 200) {
                this.caseTree = caseRes.data
            }
        },
    },
})
