import { Fragment, JSXXML } from 'jsx-xml'
import { omitBy, isUndefined } from 'lodash'
import * as uuid from 'uuid'
import { formatBoolean } from './support'
import { formatDuration } from './time'

/*
start and end are applied to the asset video, specifying the region of the source video
duration and offset are applied to the clip and act like a mask to the source asset

children of a clip start with the parent clip, they can have duration larger than parent

to use end on a clip you must specify end to the asset
*/
export const Clip = ({
    name = 'Untitled',
    start,
    duration,
    ref,
    audioRole = 'dialogue',
    offset = undefined,
    format,
    mute = false,
    children = null,
    ...rest
}: any) => {
    const props: any = omitBy(
        {
            name,
            ref,
            start: formatDuration(start),
            duration: formatDuration(duration),
            offset: formatDuration(offset),
            audioRole,
            format,
        },
        isUndefined,
    )

    return (
        <asset-clip tcFormat='NDF' {...props} {...rest}>
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

export const Asset = ({
    id,
    src,
    start,
    duration,
    hasVideo = true,

    hasAudio = false,
    formatName = 'FFVideoFormat1080p',
    audioSources = true,
    audioChannels = 2,
    audioRate = 44100,
    fps = 25,
}) => {
    // TODO try using an audio asset
    const formatId = 'r' + uuid.v4().replace(/-/g, '').slice(0, 2)
    // TODO make one format common for all the clips with same format (width, height, fpz, definition)
    return (
        <Fragment>
            <format id={formatId} name={formatName + fps} />
            <asset
                id={id}
                src={src}
                start={`${start}s`}
                duration={`${duration}s`}
                hasVideo={formatBoolean(hasVideo)}
                hasAudio={formatBoolean(hasAudio)}
                format={formatId}
                audioSources={formatBoolean(audioSources)}
                audioChannels={String(audioChannels)}
                audioRate={String(audioRate)}
            />

            {/* TODO add format props like  name="FFVideoFormat720p2398" frameDuration="1001/24000s" width="1280" height="720" colorSpace="1-1-1 (Rec. 709)"  */}
        </Fragment>
    )
}
