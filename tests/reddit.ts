import assert from 'assert'
import RedditAPI from 'snoowrap'

describe('reddit', () => {
    it('', async () => {
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
            .getSubreddit('Warzone')
            .getTop({ limit: 10, time: 'day' })
        assert(r[0].media.reddit_video.hls_url.startsWith('http'))
    })
})
