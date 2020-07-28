import fs from 'fs'
import { render, JSXXML } from 'jsx-xml'
import { Wrapper } from './project'
import { Asset, Clip, SimpleTransition } from './clip'
import { Beats } from './time'

const Example = ({}) => {
    const VIDEO_PATH = './video.mp4'
    const AUDIO_PATH = './audio.wav'
    const TRANSITION_REF = 'trans'
    // TODO make a library of transition you can use as component
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
                <Asset src={VIDEO_PATH} start={0} duration={5} />
                <Asset src={AUDIO_PATH} start={0} duration={5} />
                <effect
                    id={TRANSITION_REF}
                    name='Gaussian'
                    // TODO what is ...? is it portable?
                    uid='.../Transitions.localized/Blurs.localized/Gaussian.localized/Gaussian.motr'
                />
            </resources>

            <event name='Demo Title of project'>
                <project name='Demo Title of project'>
                    <sequence format='r1' duration='10s'>
                        <spine>
                            <Clip mute path={VIDEO_PATH} duration={1} />
                            <Clip
                                mute
                                offset={2}
                                path={VIDEO_PATH}
                                duration={1}
                            >
                                <Clip
                                    offset={2}
                                    lane='-1'
                                    path={VIDEO_PATH}
                                    duration={1}
                                />
                                <Clip
                                    lane='-2'
                                    path={VIDEO_PATH}
                                    duration={1}
                                />
                                <spine lane='-3'>
                                    {Array(10)
                                        .fill(0)
                                        .map((_) => (
                                            <Clip
                                                path={AUDIO_PATH}
                                                duration={Beats(1 / 8)}
                                            />
                                        ))}
                                </spine>
                            </Clip>
                            <Clip path={VIDEO_PATH} duration={1} />
                            <SimpleTransition videoRef={TRANSITION_REF} />
                            <Clip path={VIDEO_PATH} duration={1} />
                            <Clip path={VIDEO_PATH} duration={1} />
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
