import assert from 'assert'
import { downloadFile } from '../src/support'

describe('support', () => {
    it('downloadFile', async () => {
        const res = await downloadFile({
            url: 'https://via.placeholder.com/150',
        })
        console.log(res)
        assert(res.path)
        await res.delete()
    })
})
