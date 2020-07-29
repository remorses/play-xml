import ffmpeg, { FfprobeData, FfprobeStream } from 'fluent-ffmpeg'
import fs, { promises as fsp } from 'fs'
import { isUndefined } from 'lodash'
import mime from 'mime-types'
import fetch from 'node-fetch'
import { sortBy } from 'lodash'
import os from 'os'
import path from 'path'
import * as uuid from 'uuid'
import { formatNames } from './constants'

export function formatBoolean(bool) {
    return bool ? '1' : '0'
}

export function pathToRef(p: string) {
    if (isUndefined(p)) {
        return
    }
    // TODO if we do path.resolve the current cwd must be the output xml file directory
    return 'r' + Buffer.from(path.normalize(p)).toString('hex')
}

export async function downloadFile({
    url,
    directory = '',
}): Promise<{ extension: string; path: string; delete: () => void }> {
    const res = await fetch(url)
    directory = directory || os.tmpdir()
    const filePath = path.resolve(directory, uuid.v4())
    return await new Promise((resolve, reject) => {
        const fileStream = fs.createWriteStream(filePath)
        res.body.pipe(fileStream)
        res.body.on('error', (err) => {
            reject(err)
        })
        fileStream.on('finish', function () {
            const extension =
                mime.extension(res.headers.get('Content-Type')) || 'unknown'
            const newPath = `${filePath}.${extension}`
            fs.renameSync(filePath, newPath)
            resolve({
                extension,
                delete: () => {
                    return fsp.unlink(newPath)
                },
                path: newPath,
            })
        })
    })
}

export function getVideoInfo(p): Promise<FfprobeData> {
    return new Promise((resolve, reject) => {
        ffmpeg.ffprobe(p, function (err, metadata) {
            if (err) {
                reject(err)
            }
            resolve(metadata)
        })
    })
}

function computeFraction(s: string) {
    if (!s) {
        throw new Error('cannot compute fraction of falsey value ' + s)
    }
    if (!s.includes('/')) {
        return Number(s)
    }
    const [a, b] = s.split('/')
    return Number(a) / Number(b)
}

export async function getVideoFormat(p) {
    const info = await getVideoInfo(p)
    const videoStream = info.streams
        .filter((x) => x.codec_type === 'video')
        .sort((a, b) => b.width - a.width)[0]
    if (!videoStream) {
        // TODO maybe throw
        throw new Error(`cannot find video stream for '${p}'`)
    }
    const { width, height, avg_frame_rate, color_space } = videoStream
    const name = computeFormatName(videoStream)
    if (!formatNames.includes(name)) {
        throw new Error(`computed format name ${name} does not exist`)
    }
    const format = {
        width,
        height,
        name,
        frameDuration: avg_frame_rate + 's',
        // colorSpace: '1-1-1 (Rec. 709)',
    }
    return format
}

const PRECISION = 0.1

function computeFormatName(videoStream: FfprobeStream): string {
    const { width, height, avg_frame_rate, color_space } = videoStream
    const floatingFps = computeFraction(avg_frame_rate)
    const fps = sortBy([24, 25, 30, 50, 60], (x) => {
        return Math.abs(x - floatingFps)
    })[0]
    if (Math.abs(width / height - 16 / 9) <= PRECISION) {
        return `FFVideoFormat${height}p${fps}`
    } else {
        return `FFVideoFormat${width}x${height}p${fps}`
    }
}
