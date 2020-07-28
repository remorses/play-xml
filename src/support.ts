export function formatBoolean(bool) {
    return bool ? '1' : '0'
}

const DENOMINATOR = 30000

export function formatDuration(n) {
    if (!n) {
        return
    }
    // TODO based on bpm or fps instead of seconds, how to pass the project fps and bpm to use?
    if (typeof n === 'number') {
        if (n % 1 === 0) {
            return `${n}s`
        }
        return `${Math.floor(n * DENOMINATOR)}/${DENOMINATOR}s`
    }

    return n
}
