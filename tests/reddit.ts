import assert from 'assert'
import RedditAPI from 'snoowrap'
import { getRedditVideos } from '../src/components/reddit'

describe('reddit', () => {
    it('getRedditVideos', async () => {
        const vs = await getRedditVideos({
            limit: 10,
            subreddit: 'Warzone',
        })
        console.log(vs)
    })
})
