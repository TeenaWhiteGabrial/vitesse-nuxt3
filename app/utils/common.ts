/**
 * 有条件的跳转
 */
export function jumpLink({ url, type = '_blank', ifJump = true }: { url: string, type?: string, ifJump?: boolean }) {
    if (!url || !ifJump) {
        return ''
    }
    else if (url.indexOf('http') === 0) {
        window.open(url, type)
    }
    else if (url.indexOf('/') === 0) {
        window.open(window.location.origin + url, type)
    }
    else {
        window.open(`${window.location.origin}/${url}`, type)
    }
}

/**
 * 填充空白的数据至指定的长度
 * @param data
 * @param count
 */
export function supplementaryData(data: any[], count: number) {
    const len = data.length
    const cloneData = _Clone(data)
    for (let i = len; i < count; i++) {
        cloneData.push('')
    }
    return cloneData
}
