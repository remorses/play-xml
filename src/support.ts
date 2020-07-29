import ffmpeg, { FfprobeData } from 'fluent-ffmpeg'
import fs, { promises as fsp } from 'fs'
import { isUndefined } from 'lodash'
import mime from 'mime-types'
import fetch from 'node-fetch'
import os from 'os'
import path from 'path'
import * as uuid from 'uuid'

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
