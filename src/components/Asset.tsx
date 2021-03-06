import { Fragment, JSXXML } from 'jsx-xml'
import * as uuid from 'uuid'
import path from 'path'
import { formatBoolean, pathToRef } from '../support'
import { formatDuration } from '../time'

export const Asset = ({
    src,
    start = 0,
    duration,
    hasVideo = true,
    hasAudio = false,
    formatName = 'FFVideoFormat1080p', // TODO make an enum with all possible format names, make a map from ffprobe to fcp format name
    audioSources = true,
    audioChannels = 2,
    audioRate = 44100,
    fps = 25,
}) => {
    const formatId = 'r-format-' + pathToRef(src)
    // TODO make one format common for all the clips with same format (width, height, fpz, definition)
    // TODO extract format using a memoized ffprobe call
    return (
        <Fragment>
            <format id={formatId} name={formatName + fps} />
            <asset
                id={pathToRef(src)}
                src={path.isAbsolute(src) ? `file://${src}` : src}
                start={formatDuration(start)}
                duration={formatDuration(duration)}
                hasVideo={formatBoolean(hasVideo)}
                hasAudio={formatBoolean(hasAudio)}
                format={formatId}
                audioSources={formatBoolean(audioSources)}
                audioChannels={audioChannels}
                audioRate={audioRate}
            />

            {/* TODO add format props like  name="FFVideoFormat720p2398" frameDuration="1001/24000s" width="1280" height="720" colorSpace="1-1-1 (Rec. 709)"  */}
        </Fragment>
    )
}
