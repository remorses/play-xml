import RedditAPI from 'snoowrap'

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

    return r
        .map((x) => {
            if (!x.media?.reddit_video?.hls_url) {
                return
            }
            return {
                url: x.media.reddit_video.hls_url,
                title: x.title,
            }
        })
        .filter(Boolean)
}
