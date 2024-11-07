interface ContentState {
    floorList: any[]
    pointList: any[]
    bannerList: any[]
}
export const useContentStore = defineStore('contentStore', {
    state: (): ContentState => ({
        floorList: [], // 楼层信息
        pointList: [], // 要点阵列
        bannerList: [], // 首页大图
    }),
    actions: {
        async fetch() {
            const resData: any = await useCustomFetch('/gateway/portal/open/configs')
            if (resData.code === 200) {
                const { bannerJson, mainPointsJson, floorInfoJson } = resData.data
                try {
                    if (bannerJson) {
                        const bannerArr: any[] = JSON.parse(bannerJson)
                        this.bannerList = bannerArr.filter(item => item.isShow === true)
                    }
                    if (mainPointsJson) {
                        this.pointList = []
                        const pointArr: any[] = mainPointsJson.split(';')
                        pointArr.forEach((point) => {
                            const arr: string[] = point.split(':')
                            if (arr.length > 1) {
                                this.pointList.push({
                                    label: arr[0],
                                    value: arr[1],
                                })
                            }
                        })
                    }
                    if (floorInfoJson) {
                        this.floorList = JSON.parse(floorInfoJson)
                    }
                }
                catch (error) {
                    console.error('JSON 解析错误', error)
                }
            }
        },
    },
    persist: import.meta.client && {
        storage: localStorage,
    },
})
