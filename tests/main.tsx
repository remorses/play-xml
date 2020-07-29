import { projectFromUrls } from '../src/projects/ProjectFromClips'
import { JsxElement, JSXXML, render } from 'jsx-xml'
import { Asset, Clip, Project, Anchored } from '../src'
import fs from 'fs'

describe('main', () => {
    it('main', async function () {
        const urls = [
            {
                url:
                    'https://v.redd.it/uag4uw003od51/HLSPlaylist.m3u8?a=1598623389%2CNDBjOGQ3ZjNiYWM1YmI0MDAyOGM5ZjI0OTlkMzc4YzI0MGRhYzAzMTA4OTcwNGY0Mzc0NzlmNDIxOGM2YzQ3OQ%3D%3D&v=1&f=sd',
                title: 'TacticalGramma Self-Revive WIN',
            },
        ]
        const x = await projectFromUrls({
            urls: urls.map((x) => x.url).slice(0, 2),
        })
        const xml = render(x, {
            doctype: 'fcpxml',
            createOptions: {
                // headless: true,
                encoding: 'UTF-8',
            },
            endOptions: { pretty: true },
        }) // jsx input

        console.log(xml)
        fs.writeFileSync('out.fcpxml', xml)
    })
})

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

async function main() {
    const urls = [
        {
            url:
                'https://v.redd.it/eiz5o61jdmd51/HLSPlaylist.m3u8?a=1598623389%2CMjI1N2ZiYWFkMDA2Y2VkZWMyZWRkMzYzNjZjZTA1YTUxYjkyZGY3ZmY4Y2E1YmJlMGI0MTY0OTM0YmQwODQwNQ%3D%3D&v=1&f=sd',
            title: '3 Helis 1 Rpg.',
        },
        {
            url:
                'https://v.redd.it/ki3ivtmc0md51/HLSPlaylist.m3u8?a=1598623389%2CMTgwY2YyYjljODc1MzY0NWU4OTlmZGJhY2MyZWFjYzBhZTI0ZDBjNGZkYjgxMDQyNzIxMzk2YWI1ZTIzMGZkOQ%3D%3D&v=1&f=sd',
            title: 'By the time i realised, it was too late...',
        },
        {
            url:
                'https://v.redd.it/6nw4e0setpd51/HLSPlaylist.m3u8?a=1598623389%2CNDY5NTAwOWRmYTZmOTIxZjk3NGJkZWRiNTNhYzQ5NzA2NWUwZGRjZThiYjhjNWI5OWU3YjViMmM5NWUyOWNhYQ%3D%3D&v=1&f=sd',
            title: '5 bullets, 1 semtex, 100% accuracy and a Juggernaut',
        },
        {
            url:
                'https://v.redd.it/2a0i5uzotmd51/HLSPlaylist.m3u8?a=1598623389%2CZmFiMmQ2Mzc0ZWY3MzYyZmFjYzlhMmE5NTM0ZGJkMzk3NGJiOGM2ZTkxNDg3ZmMxNzdiZWFiZjcwNjg3NDY4YQ%3D%3D&v=1&f=sd',
            title: 'A short lived friendship in solos',
        },
        {
            url:
                'https://v.redd.it/0t659bsftmd51/HLSPlaylist.m3u8?a=1598623389%2CZjc1ODI2ZThjMGRiMzk3NzI2NmFmNjc4ZWQzZjU3ZGUxM2EwNThmODJjNDI5OWM0YjZkNDY2MzNiZmI4NDJlOA%3D%3D&v=1&f=sd',
            title: 'A pretty long pistol snipe out of a helicopter',
        },
        {
            url:
                'https://v.redd.it/09i1lc4jzld51/HLSPlaylist.m3u8?a=1598623389%2CZWIyNDk5MTUxMzk1MWRjNzYzYmQ1MDQ4Mzk4ZWZlYmU5YWNmZWI5NWEyMDFjZmZlNWNiZmU1N2E3ZTMwMTU5NQ%3D%3D&v=1&f=sd',
            title: 'The perfect mine',
        },
        {
            url:
                'https://v.redd.it/uag4uw003od51/HLSPlaylist.m3u8?a=1598623389%2CNDBjOGQ3ZjNiYWM1YmI0MDAyOGM5ZjI0OTlkMzc4YzI0MGRhYzAzMTA4OTcwNGY0Mzc0NzlmNDIxOGM2YzQ3OQ%3D%3D&v=1&f=sd',
            title: 'TacticalGramma Self-Revive WIN',
        },
    ]
    const x = await projectFromUrls({
        urls: urls.map((x) => x.url).slice(0, 2),
    })
    const xml = render(x, {
        doctype: 'fcpxml',
        createOptions: {
            // headless: true,
            encoding: 'UTF-8',
        },
        endOptions: { pretty: true },
    }) // jsx input

    console.log(xml)
    fs.writeFileSync('out.fcpxml', xml)
}
