import { JSXXML } from 'jsx-xml'
import { cloneElement, pretty } from '../src/support'
import assert from 'assert'

describe('cloneElement', () => {
    it('works with text elements', () => {
        var element = <tag />
        var cloned = cloneElement(element)
        assert.equal(pretty(element), pretty(cloned))
    })
    it('works with FC elements', () => {
        const B = ({ x }) => {
            return (
                <tag x={x}>
                    <anothertag />
                </tag>
            )
        }
        const A = ({ x }) => {
            return <B x={x} />
        }
        var element = <A x='3' />
        var cloned = cloneElement(element)
        assert.equal(pretty(element), pretty(cloned))
    })
})
