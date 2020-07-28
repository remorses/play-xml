import { Fragment, JSXXML } from 'jsx-xml'
import { omitBy, isUndefined } from 'lodash'
import * as uuid from 'uuid'

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
            {children}
        </asset-clip>
    )
}

function formatBoolean(bool) {
    return bool ? '1' : '0'
}
function formatDuration(d) {
    return d ? `${d}s` : d
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
