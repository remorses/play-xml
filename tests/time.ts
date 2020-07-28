import assert from 'assert'
import { formatDuration, Beats, Fps } from '../src/time'

describe('formatDuration', () => {
    it('', () => {
        assert.equal(formatDuration(0.03336666666666667), `1001/30000s`)
        assert.equal(formatDuration(1), `1s`)
        assert.equal(formatDuration(Beats(128, 128)), `7680000/128000s`)
        assert.equal(formatDuration(Fps(25, 25)), '25000/25000s')
    })
})
