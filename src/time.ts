export type TimeObject =
    | number
    | {
          isBpm?: boolean
          isFps?: boolean
          seconds: number
          timeString: string
          toString: () => string
      }

export function Beats(n: number, bpm: number): TimeObject {
    return {
        isBpm: true,
        timeString: `${Math.floor(60 * n * 1000)}/${bpm * 1000}s`,
        seconds: (60 / bpm) * n,
        toString() {
            return `Beats(${n}, bpm=${bpm})`
        },
    }
}

export function Fps(n: number, fps: number): TimeObject {
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
    // TODO based on bpm or fps instead of seconds, how to pass the project fps and bpm to use? maybe pass an instance new Beats(3, 128) to make 3 beats at 128 bpm or new Frames(10, 25) to pass 10 frames at 25 fps
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
