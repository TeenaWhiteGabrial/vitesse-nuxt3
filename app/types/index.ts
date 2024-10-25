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
export interface ResponseData {
    code: CodeEnum
    msg: string
    data: any
}

/**  资源 */
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
