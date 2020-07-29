import fs from 'fs'
import { render, JSXXML, JSXNode, JsxElement } from 'jsx-xml'
import { Wrapper } from './project'
import { mapKeys } from 'lodash'
import { Asset, Clip, SimpleTransition } from './components'
import { Beats, formatDuration } from './time'

// TODO make a Parallel element that makes some clips parallel (making the first clip the parent and other clips children)
// TODO make Spine sequence that makes clips sequential

export const Anchored = ({ anchor, children }): JsxElement => {
    // if (!children || children.length == 0) {
    //     return null
    // }
    // const FirstClip = children[0]
    // if (FirstClip.type.isClip) {
    //     return JSXXML(FirstClip.type, FirstClip.props, children.slice(1))
    // }
    return cloneElement(anchor, {}, children)
}

function cloneElement(element, props = {}, children = []): JsxElement {
    const ks = Object.keys(element)
    if (!ks.length) {
        throw new Error(`element ${element} invalid, no keys`)
    }
    const tag = ks[0]
    const oldProps = element[tag][0] || {}
    return {
        [tag]: [
            { ...oldProps, ...props },
            ...element[tag]?.slice?.(1),
            ...children,
        ],
    }
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
                    name='FFVideoFormat720p24'
                    frameDuration='100/6000s'
                    width='1280'
                    height='720'
                    // colorSpace='1-1-1 (Rec. 709)'
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
                            <Anchored
                                anchor={
                                    <Clip mute src={VIDEO_PATH} duration={4} />
                                }
                            >
                                <spine lane='-1'>
                                    <Clip
                                        mute
                                        src={VIDEO_PATH}
                                        duration={0.3}
                                    />
                                    <Clip
                                        mute
                                        src={VIDEO_PATH}
                                        duration={0.3}
                                    />
                                    <Clip
                                        mute
                                        src={VIDEO_PATH}
                                        duration={0.3}
                                    />
                                </spine>
                                <spine lane='-2'>
                                    <Clip
                                        mute
                                        src={VIDEO_PATH}
                                        duration={0.3}
                                    />
                                    <Clip
                                        mute
                                        src={VIDEO_PATH}
                                        duration={0.3}
                                    />
                                    <Clip
                                        mute
                                        src={VIDEO_PATH}
                                        duration={0.3}
                                    />
                                </spine>
                            </Anchored>
                            <Anchored
                                anchor={
                                    <Clip mute src={VIDEO_PATH} duration={3} />
                                }
                            >
                                <spine lane='-1'>
                                    <Clip
                                        mute
                                        src={VIDEO_PATH}
                                        duration={0.3}
                                    />
                                    <Clip
                                        mute
                                        src={VIDEO_PATH}
                                        duration={0.3}
                                    />
                                    <Clip
                                        mute
                                        src={VIDEO_PATH}
                                        duration={0.3}
                                    />
                                </spine>
                                <spine lane='-2'>
                                    <Clip
                                        mute
                                        src={VIDEO_PATH}
                                        duration={0.3}
                                    />

                                    <Clip
                                        mute
                                        src={VIDEO_PATH}
                                        duration={0.3}
                                    />
                                    <Clip
                                        mute
                                        src={VIDEO_PATH}
                                        duration={0.3}
                                    />
                                </spine>
                            </Anchored>
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
