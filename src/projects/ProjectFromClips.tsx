import { JsxElement, JSXXML, render } from 'jsx-xml'
import { Asset, Clip, Project } from '../components'
import { TimeObject } from '../time'
import { uniqBy } from 'lodash'
import { downloadFile, getVideoFormat, getVideoInfo, downloadM3u8 } from '../support'

export const ProjectFromVideos = ({
    videos,
    ...rest
}: {
    videos: SrcVideo[]
}) => {
    const assets = uniqBy(videos, (x) => x.src).map((x) => (
        <Asset src={x.src} duration={x.duration} />
    ))
    const clips = videos.map((c) => <Clip src={c.src} />)
    return (
        <Project assets={assets} {...rest}>
            {clips}
        </Project>
    )
}

export const projectFromUrls = async ({ urls, ...rest }) => {
    let videos = []
    for (let url of urls) {
        const { filePath, unlink } = await downloadM3u8({ url,  })
        console.log('finish download of ' + filePath)
        const info = await getVideoInfo(filePath)
        console.log(info)
        const {
            format: { duration },
        } = info
        videos.push({
            src: filePath,
            duration,
        })
    }
    // TODO unlink when finished
    return <ProjectFromVideos videos={videos} {...rest} />
}

export interface SrcVideo {
    src: string
    duration: TimeObject
}
