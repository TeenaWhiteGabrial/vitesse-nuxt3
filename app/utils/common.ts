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
