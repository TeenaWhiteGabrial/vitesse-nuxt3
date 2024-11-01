enum CodeEnum {
    None = -1,
    OK = 200, // 请求成功
    NOContent = 204,
    BadRequest = 400,
    Unauthorized = 401, // 未认证
    NotFound = 404, // 无法找到资源
    InternalServerErrir = 500, // 服务器内部错误
}
/** 接口返回值 */
export interface ApiResponse<T> {
    code: CodeEnum
    msg: string
    data: T
}

/** 资源树一级类别 */
export interface ResourceMultiCategory {
    name: string
    multicategoryType: string
    multicategoryList: ResourceCategory[]
}

/** 资源树二级类别 */
export interface ResourceCategory {
    categoryId: string
    categoryName: string
    unitList: Resource[]
}

/**  资源详细信息 */
export interface Resource {
    id: string
    name: string
    introduction: string
    type: string
    secondaryType: string
    photo: string
    publishTime: string
    link: string
    sequence: string
    status: string
    afferentWay: string
    industry: string
    industryIds: string
    domain: string
    domainIds: string
    publishStatus: string
    price: string
    address: string
    floorType: string
    publishedProcessStatus: string
    organizeId: string
    measurementUnit: string
    changeRate: string
}

/** 栏目 */
export interface Column {
    id: string
    sequence?: number | string
    isShow: number
    child: Column[]
    columnName: string
    columnLink: string
}
