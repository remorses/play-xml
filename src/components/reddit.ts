import RedditAPI from 'snoowrap'
import path from 'path'
import { URL } from 'url'
import { sortBy } from 'lodash'
import fetch from 'node-fetch'
import { Parser as M3u8Parser } from 'm3u8-parser'

export async function getRedditVideos({ subreddit, limit = 10 }) {
    var redditConn = new RedditAPI({
        // Options for Reddit Wrapper
        username: '_MORSE_',
        password: process.env.REDDIT_PASSWORD,
        clientId: process.env.REDDIT_CLIENT_ID,
        clientSecret: process.env.REDDIT_SECRET,
        userAgent: 'node',
        // retry_on_wait: true,
        // retry_on_server_error: 5,
        // retry_delay: 1,
        // logs: true,
    })
    const r = await redditConn
        .getSubreddit(subreddit)
        .getTop({ limit, time: 'day' })
    // await r.fetchUntil({ amount: limit })

    // TODO batch promise.all
    const res = await Promise.all(
        r.map(async (x) => {
            if (!x.media?.reddit_video?.hls_url) {
                return
            }
            const hslMasterUrl = x.media.reddit_video.hls_url
            const videoUri = getHighestQualityHslVIdeo(
                await (await fetch(hslMasterUrl)).text(),
            )
            return {
                url: new URL(`./${videoUri}`, hslMasterUrl).toString(),
                title: x.title,
            }
        }),
    )
    return res.filter(Boolean)
}

function getHighestQualityHslVIdeo(hslData) {
    var parser = new M3u8Parser()

    parser.push(hslData)
    parser.end()

    const { playlists = [] } = parser.manifest
    // console.log(parser.manifest.playlists[0])
    if (!playlists || !playlists.length) {
        throw new Error(`no playlist found in hsl data`)
    }
    const highestQuality = sortBy(
        playlists,
        (x) => -x?.attributes?.RESOLUTION?.width,
    )[0]
    return highestQuality?.uri || ''
}
