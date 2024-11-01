import type { Column } from '~/types'

export const useColumnStore = defineStore('columnStore', {
    state: () => ({
        columnList: [],
    }),
    actions: {
        // 获取栏目列表
        async getColumnList() {
            const columnRes: any = await useCustomFetch('/gateway/portal/open/columns')
            if (columnRes.code === 200) {
                columnRes.data.sort((a: Column, b: Column) => {
                    return a.sequence - b.sequence
                })
                this.columnList = columnRes.data
            }
        },
    },
})
