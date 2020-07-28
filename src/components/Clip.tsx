import { JSXXML } from 'jsx-xml'
import { isUndefined, omitBy } from 'lodash'
import { pathToRef } from '../support'
import { formatDuration } from '../time'

/*
start and end are applied to the asset video, specifying the region of the source video
duration and offset are applied to the clip and act like a mask to the source asset

children of a clip start with the parent clip, they can have duration larger than parent

to use end on a clip you must specify end to the asset
*/
export const Clip = ({
    name = 'Untitled',
    src,
    start = undefined,
    duration,
    offset = undefined,
    audioRole = 'dialogue',
    format,
    mute = false,
    children = null,
    ...rest
}: any) => {
    const props: any = omitBy(
        {
            name,
            start: formatDuration(start),
            duration: formatDuration(duration),
            offset: formatDuration(offset),
            audioRole,
            format,
        },
        isUndefined,
    )

    return (
        <asset-clip tcFormat='NDF' {...props} {...rest} ref={pathToRef(src)}>
            {mute && <adjust-volume amount='-96dB' />}
            {children}
            {/* <filter-video ref='r5' name='Color Correction'>
                <param
                    name='Color Shadows'
                    key='2003'
                    value='0.429101 0.526828'
                />
                <param name='Saturation Highlights' key='2005' value='1' />
                <param name='Saturation Midtones' key='2006' value='1' />
                <param name='Saturation Shadows' key='2007' value='1' />
            </filter-video> */}
        </asset-clip>
    )
}
