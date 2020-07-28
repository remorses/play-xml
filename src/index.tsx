import fs from 'fs'
import { render, JSXXML, JSXNode } from 'jsx-xml'
import { Wrapper } from './project'
import { Asset, Clip, SimpleTransition } from './components'
import { Beats } from './time'

// TODO make a Parallel element that makes some clips parallel (making the first clip the parent and other clips children)
// TODO make Spine sequence that makes clips sequential

export const Parallel = ({ children }) => {
    if (!children || children.length == 0) {
        return null
    }
    const FirstClip = children[0]
    if (FirstClip.type.isClip) {
        return JSXXML(FirstClip.type, FirstClip.props, children.slice(1))
    }
    return <clip duration=''></clip>
}

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
                        <spine lane='0'>
                            <Clip mute lane='0' src={VIDEO_PATH} duration={1}>
                                <Clip
                                    mute
                                    lane='-1'
                                    src={VIDEO_PATH}
                                    duration={2}
                                />
                                <spine lane='-2'>
                                    <Clip mute src={VIDEO_PATH} duration={3} />
                                    <Clip mute src={VIDEO_PATH} duration={3} />
                                    <Clip mute src={VIDEO_PATH} duration={3} />
                                </spine>
                            </Clip>
                            {/* <Clip mute lane='-1' src={VIDEO_PATH} /> */}
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
