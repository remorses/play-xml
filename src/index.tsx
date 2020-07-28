import fs from 'fs'
import { render, JSXXML } from 'jsx-xml'
import { Wrapper } from './project'
import { Asset, Clip } from './clip'

const Example = ({}) => {
    const VIDEO_ID = 'vid'
    return (
        <fcpxml version='1.8'>
            <resources>
                <format
                    id='r1'
                    name='FFVideoFormat720p60'
                    frameDuration='100/6000s'
                    width='1280'
                    height='720'
                    colorSpace='1-1-1 (Rec. 709)'
                />
                <Asset id={VIDEO_ID} src='./video.mp4' start={0} duration={5} />
            </resources>

            <event name='Demo Title of project'>
                <project name='Demo Title of project'>
                    <sequence format='r1' duration='10s'>
                        <spine>
                            <Clip ref={VIDEO_ID} duration={1} />
                            <Clip offset={2} ref={VIDEO_ID} duration={1}>
                                <Clip offset={2} lane='-1' ref={VIDEO_ID} duration={1} />
                                <Clip lane='-2' ref={VIDEO_ID} duration={1} />
                            </Clip>
                            <Clip ref={VIDEO_ID} duration={1} />
                            <Clip ref={VIDEO_ID} duration={1} />
                            <Clip ref={VIDEO_ID} duration={1} />
                        </spine>
                    </sequence>
                </project>
            </event>
        </fcpxml>
    )
}

const xml = render(<Example />, {
    doctype: 'fcpxml',
    createOptions: {
        // headless: true,
        encoding: 'UTF-8',
    },
    endOptions: { pretty: true },
}) // jsx input

console.log(xml)
fs.writeFileSync('out.fcpxml', xml)
