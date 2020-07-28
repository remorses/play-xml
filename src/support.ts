import path from 'path'

export function formatBoolean(bool) {
    return bool ? '1' : '0'
}

export function pathToRef(p: string) {
    // TODO if we do path.resolve the current cwd must be the output xml file directory
    return 'r' + Buffer.from(path.normalize(p)).toString('base64')
}
