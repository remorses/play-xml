import fs from 'fs'
import { render, JSXXML } from 'jsx-xml'
import { Wrapper } from './project'
import { Asset, Clip, SimpleTransition } from './clip'
import { Beats } from './time'

const Example = ({}) => {
    const VIDEO_ID = 'vid'
    const AUDIO_ID = 'aud'
    const TRANSITION_REF = 'trans'
    // TODO remove resources, instead you can pass a path to every clip
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
                <Asset id={VIDEO_ID} src='./video.mp4' start={0} duration={5} />
                <Asset id={AUDIO_ID} src='./audio.wav' start={0} duration={5} />
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
                            <Clip mute ref={VIDEO_ID} duration={1} />
                            <Clip mute offset={2} ref={VIDEO_ID} duration={1}>
                                <Clip
                                    offset={2}
                                    lane='-1'
                                    ref={VIDEO_ID}
                                    duration={1}
                                />
                                <Clip lane='-2' ref={VIDEO_ID} duration={1} />
                                <spine lane='-3'>
                                    <Clip
                                        ref={AUDIO_ID}
                                        duration={Beats(1 / 2)}
                                    />
                                    <Clip
                                        ref={AUDIO_ID}
                                        duration={Beats(1 / 2)}
                                    />
                                    <Clip
                                        ref={AUDIO_ID}
                                        duration={Beats(1 / 2)}
                                    />
                                    <Clip
                                        ref={AUDIO_ID}
                                        duration={Beats(1 / 2)}
                                    />
                                    <Clip
                                        ref={AUDIO_ID}
                                        duration={Beats(1 / 2)}
                                    />
                                    <Clip
                                        ref={AUDIO_ID}
                                        duration={Beats(1 / 2)}
                                    />
                                    <Clip
                                        ref={AUDIO_ID}
                                        duration={Beats(1 / 2)}
                                    />
                                </spine>
                            </Clip>
                            <Clip ref={VIDEO_ID} duration={1} />
                            <SimpleTransition videoRef={TRANSITION_REF} />
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
