export function jumpLink(url: string, type: string = '_blank') {
    if (!url) {
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
