export type TimeObject =
    | number
    | {
          isBpm?: boolean
          isFps?: boolean
          seconds: number
          timeString: string
          toString: () => string
      }

export function Beats(n: number, bpm: number = 120): TimeObject {
    return {
        isBpm: true,
        timeString: `${Math.floor(60 * n * 1000)}/${bpm * 1000}s`,
        seconds: (60 / bpm) * n,
        toString() {
            return `Beats(${n}, bpm=${bpm})`
        },
    }
}

export function Fps(n: number, fps: number = 25): TimeObject {
    return {
        isFps: true,
        timeString: `${Math.floor(n * 1000)}/${fps * 1000}s`,
        seconds: (1 / fps) * n,
        toString() {
            return `Fps(${n}, fps=${fps})`
        },
    }
}

export function formatDuration(
    n: TimeObject,
    denominator = DEFAULT_DENOMINATOR,
): string {
    if (!n) {
        return
    }
    if (typeof n === 'string') {
        return n
    }
    if (typeof n === 'number') {
        if (n % 1 === 0) {
            return `${n}s`
        }
        return `${Math.floor(n * denominator)}/${denominator}s`
    }

    if (n.timeString) {
        return n.timeString
    }

    throw new Error(`${n} is not a valid time object`)
}

const DEFAULT_DENOMINATOR = 30000
