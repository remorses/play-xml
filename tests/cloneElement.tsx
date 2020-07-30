import { JSXXML } from 'jsx-xml'
import { cloneElement, pretty } from '../src/support'
import assert from 'assert'

describe('cloneElement', () => {
    it('works with text elements', () => {
        var element = <tag />
        var cloned = cloneElement(element)
        assert.equal(pretty(element), pretty(cloned))
    })
    it('adds new props', () => {
        const props = { x: 10, y: 4 }
        var element = <tag {...props} />
        var cloned = cloneElement(<tag />, props)
        assert.equal(pretty(element), pretty(cloned))
    })
    it('works with FC elements', () => {
        const B = ({ x, children }) => {
            return (
                <tag x={x}>
                    <anothertag />
                    {children}
                </tag>
            )
        }
        const A = ({ x }) => {
            return (
                <B x={x}>
                    <sometag />
                </B>
            )
        }
        var element = <A x='3' />
        var cloned = cloneElement(element)
        assert.equal(pretty(element), pretty(cloned))
    })
})
