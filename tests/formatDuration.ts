import assert from 'assert'
import { formatDuration } from '../src/support'

describe('formatDuration', () => {
    it('', () => {
        assert.equal(formatDuration(0.03336666666666667), `1001/30000s`)
        assert.equal(formatDuration(1), `1s`)
    })
})
