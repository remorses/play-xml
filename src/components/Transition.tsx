import { JSXXML } from 'jsx-xml'
import { isUndefined, omitBy } from 'lodash'
import { formatDuration } from '../time'

// TODO needs to pass the offset explicitly or it will just be the start of timeline
// TODO transition offset is weird
// TODO instead of using ref use src and export some src transitions you can use (put by default inside resources)
export const SimpleTransition = ({
    duration = 0.5,
    offset = undefined,
    name = 'Transition',
    children = null,
    videoRef,
    ...rest
}) => {
    const props: any = omitBy(
        {
            duration: formatDuration(duration),
            offset: formatDuration(offset),
        },
        isUndefined,
    )
    return (
        <transition name={name} {...props} {...rest}>
            <filter-video ref={videoRef} name='Gaussian' />
            {children}
            {/* <filter-audio ref='r5' name='Audio Crossfade' /> */}
        </transition>
    )
}
