import { render, JSXXML } from 'jsx-xml'

export const Clip = ({}) => {
    return (
        <clip
            name='Ghost in the Shell intro HD'
            offset='0s'
            duration='21300/6000s'
            start='192500/6000s'
            format='r2'
            tcFormat='NDF'
        >
            <conform-rate srcFrameRate='25' scaleEnabled='0' />
            <video offset='0s' ref='r3' duration='17852400/90000s' />
            <asset-clip
                name='talisman stallion 2'
                lane='-2'
                offset='23100000/720000s'
                ref='r4'
                duration='1292177/720000s'
                start='25765229/720000s'
                enabled='0'
                audioRole='dialogue'
                format='r1'
            >
                <audio-channel-source role='music.music-1' srcCh='1, 2' />
            </asset-clip>
            <asset-clip
                name='talisman stallion 2'
                lane='-1'
                offset='23100000/720000s'
                ref='r4'
                duration='97840904/720000s'
                start='5323276/720000s'
                audioRole='dialogue'
                format='r1'
            >
                <audio-channel-source role='music.music-1' srcCh='1, 2' />
            </asset-clip>
            <asset-clip
                name='talisman stallion 2'
                lane='-2'
                offset='24392177/720000s'
                ref='r4'
                duration='1301967/720000s'
                start='27057406/720000s'
                enabled='0'
                audioRole='dialogue'
                format='r1'
            >
                <audio-channel-source role='music.music-1' srcCh='1, 2' />
            </asset-clip>
        </clip>
    )
}

export const Project = ({}) => {
    return (
        <project
            name='Untitled Project 1'
            uid='4F89BF09-DBCF-4F09-A86F-0ED256182CF7'
            modDate='2020-07-26 15:47:43 +0200'
        >
            <sequence
                duration='8463600/12000s'
                format='r1'
                tcStart='0s'
                tcFormat='NDF'
                audioLayout='stereo'
                audioRate='44.1k'
            >
                <spine>
                    <Clip />
                </spine>
            </sequence>
        </project>
    )
}

export const Wrapper = ({}) => {
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
                <format
                    id='r2'
                    name='FFVideoFormat720p25'
                    frameDuration='3600/90000s'
                    width='1280'
                    height='720'
                    colorSpace='1-1-1 (Rec. 709)'
                />
                <asset
                    id='r3'
                    name='Ghost in the Shell intro HD'
                    uid='C9B02B61328A5C1D0DF58BE4E40B886C'
                    src='file:///Volumes/DB/final%20cut/Untitled.fcpbundle/11-08-2017/Original%20Media/Ghost%20in%20the%20Shell%20intro%20HD.mp4'
                    start='0s'
                    duration='17852400/90000s'
                    hasVideo='1'
                    format='r2'
                    hasAudio='1'
                    audioSources='1'
                    audioChannels='2'
                    audioRate='44100'
                >
                    <bookmark>
                        Ym9vazwEAAAAAAQQMAAAANbSmMigUjXjR+Lv8LxZcHzlNaPbQopFjr7K/jZZY/oVXAMAAAQAAAADAwAAABgAKAcAAAABAQAAVm9sdW1lcwACAAAAAQEAAERCAAAJAAAAAQEAAGZpbmFsIGN1dAAAABIAAAABAQAAVW50aXRsZWQuZmNwYnVuZGxlAAAKAAAAAQEAADExLTA4LTIwMTcAAA4AAAABAQAAT3JpZ2luYWwgTWVkaWEAAB8AAAABAQAAR2hvc3QgaW4gdGhlIFNoZWxsIGludHJvIEhELm1wNAAcAAAAAQYAABAAAAAgAAAALAAAAEAAAABcAAAAcAAAAIgAAAAIAAAABAMAAJpcAAADAAAACAAAAAQDAAACAAAAAAAAAAgAAAAEAwAAvTMOAAAAAAAIAAAABAMAALMzDgAAAAAACAAAAAQDAAC4Mw4AAAAAAAgAAAAEAwAAujMOAAAAAAAIAAAABAMAAAgTFwAAAAAAHAAAAAEGAADUAAAA5AAAAPQAAAAEAQAAFAEAACQBAAA0AQAACAAAAAAEAABBwSPewoAAABgAAAABAgAAAQAAAAAAAAAPAAAAAAAAAAAAAAAAAAAAEwAAAAEJAABmaWxlOi8vL1ZvbHVtZXMvREIvAAgAAAAEAwAAACCASegAAAAIAAAAAAQAAEG/s1PaAAAAJAAAAAEBAABDODYwNTY1OC04OTM5LTM0MDctQUFDRS01RkU4NDM0QzA2NzUYAAAAAQIAAIEAAAABAAAA7xMAAAEAAAAAAAAAAAAAAAsAAAABAQAAL1ZvbHVtZXMvREIACAAAAAEJAABmaWxlOi8vLwIAAAABAQAATTIAAAgAAAAEAwAAAMA/ZHQAAAAIAAAAAAQAAEHBtwCFupJDJAAAAAEBAAA5QTRGQkUxQS1DN0YzLTRERTYtODI4NC00NzEwMTAyQTU4RTEBAAAAAQEAAC8AAABgAAAA/v///wDwAAAAAAAABwAAAAIgAACcAgAAAAAAAAUgAAA0AgAAAAAAABAgAABEAgAAAAAAABEgAABwAgAAAAAAABIgAABQAgAAAAAAABMgAABgAgAAAAAAACAgAAAAAgAAAAAAAAQAAAADAwAAAPAAAAQAAAADAwAAAAAAAAQAAAADAwAAAQAAACAAAAABBgAAEAMAABwDAAAoAwAAHAMAABwDAAAcAwAAHAMAABwDAACoAAAA/v///wEAAACoAgAADQAAAAQQAACwAAAAAAAAAAUQAABEAQAAAAAAABAQAAB4AQAAAAAAAEAQAABoAQAAAAAAAAAgAAA0AwAAAAAAAAIgAAAgAgAAAAAAAAUgAACYAQAAAAAAABAgAAAgAAAAAAAAABEgAADUAQAAAAAAABIgAAC0AQAAAAAAABMgAADEAQAAAAAAACAgAAAAAgAAAAAAABDQAAAEAAAAAAAAAA==
                    </bookmark>
                </asset>
                <asset
                    id='r4'
                    name='talisman stallion 2'
                    uid='A5A92F0A175AE78200A080294965245D'
                    src='file:///Volumes/DB/final%20cut/Untitled.fcpbundle/11-08-2017/Original%20Media/talisman%20stallion%202.wav'
                    start='0s'
                    duration='6318806/44100s'
                    hasAudio='1'
                    audioSources='1'
                    audioChannels='2'
                    audioRate='44100'
                >
                    <bookmark>
                        Ym9vazQEAAAAAAQQMAAAAOH9IrCf0dxdfRvvIjmrhCdtDvG+SSUT/zLEMfYkwH46VAMAAAQAAAADAwAAABgAKAcAAAABAQAAVm9sdW1lcwACAAAAAQEAAERCAAAJAAAAAQEAAGZpbmFsIGN1dAAAABIAAAABAQAAVW50aXRsZWQuZmNwYnVuZGxlAAAKAAAAAQEAADExLTA4LTIwMTcAAA4AAAABAQAAT3JpZ2luYWwgTWVkaWEAABcAAAABAQAAdGFsaXNtYW4gc3RhbGxpb24gMi53YXYAHAAAAAEGAAAQAAAAIAAAACwAAABAAAAAXAAAAHAAAACIAAAACAAAAAQDAACaXAAAAwAAAAgAAAAEAwAAAgAAAAAAAAAIAAAABAMAAL0zDgAAAAAACAAAAAQDAACzMw4AAAAAAAgAAAAEAwAAuDMOAAAAAAAIAAAABAMAALozDgAAAAAACAAAAAQDAACHEhcAAAAAABwAAAABBgAAzAAAANwAAADsAAAA/AAAAAwBAAAcAQAALAEAAAgAAAAABAAAQcEj2VmAAAAYAAAAAQIAAAEAAAAAAAAADwAAAAAAAAAAAAAAAAAAABMAAAABCQAAZmlsZTovLy9Wb2x1bWVzL0RCLwAIAAAABAMAAAAggEnoAAAACAAAAAAEAABBv7NT2gAAACQAAAABAQAAQzg2MDU2NTgtODkzOS0zNDA3LUFBQ0UtNUZFODQzNEMwNjc1GAAAAAECAACBAAAAAQAAAO8TAAABAAAAAAAAAAAAAAALAAAAAQEAAC9Wb2x1bWVzL0RCAAgAAAABCQAAZmlsZTovLy8CAAAAAQEAAE0yAAAIAAAABAMAAADAP2R0AAAACAAAAAAEAABBwbcAhbqSQyQAAAABAQAAOUE0RkJFMUEtQzdGMy00REU2LTgyODQtNDcxMDEwMkE1OEUxAQAAAAEBAAAvAAAAYAAAAP7///8A8AAAAAAAAAcAAAACIAAAlAIAAAAAAAAFIAAALAIAAAAAAAAQIAAAPAIAAAAAAAARIAAAaAIAAAAAAAASIAAASAIAAAAAAAATIAAAWAIAAAAAAAAgIAAA+AEAAAAAAAAEAAAAAwMAAADwAAAEAAAAAwMAAAAAAAAEAAAAAwMAAAEAAAAgAAAAAQYAAAgDAAAUAwAAIAMAABQDAAAUAwAAFAMAABQDAAAUAwAAqAAAAP7///8BAAAAoAIAAA0AAAAEEAAAqAAAAAAAAAAFEAAAPAEAAAAAAAAQEAAAcAEAAAAAAABAEAAAYAEAAAAAAAAAIAAALAMAAAAAAAACIAAAGAIAAAAAAAAFIAAAkAEAAAAAAAAQIAAAIAAAAAAAAAARIAAAzAEAAAAAAAASIAAArAEAAAAAAAATIAAAvAEAAAAAAAAgIAAA+AEAAAAAAAAQ0AAABAAAAAAAAAA=
                    </bookmark>
                </asset>
                <asset
                    id='r5'
                    name='EA4AAE76-E044-4A1F-8F44-4A09ABC2F302'
                    uid='7B792E462D0F8AD7B65A8A9F207B3C54'
                    src='file:///Volumes/DB/final%20cut/Untitled.fcpbundle/11-08-2017/Original%20Media/EA4AAE76-E044-4A1F-8F44-4A09ABC2F302.mp4'
                    start='0s'
                    duration='640988/29869s'
                    hasVideo='1'
                    format='r6'
                    hasAudio='1'
                    audioSources='1'
                    audioChannels='1'
                    audioRate='44100'
                >
                    <bookmark>
                        Ym9va0QEAAAAAAQQMAAAAGxrPlf2GG/forP4wWDyZNolZqs+TMOeB/oCa1+0pWlOZAMAAAQAAAADAwAAABgAKAcAAAABAQAAVm9sdW1lcwACAAAAAQEAAERCAAAJAAAAAQEAAGZpbmFsIGN1dAAAABIAAAABAQAAVW50aXRsZWQuZmNwYnVuZGxlAAAKAAAAAQEAADExLTA4LTIwMTcAAA4AAAABAQAAT3JpZ2luYWwgTWVkaWEAACgAAAABAQAARUE0QUFFNzYtRTA0NC00QTFGLThGNDQtNEEwOUFCQzJGMzAyLm1wNBwAAAABBgAAEAAAACAAAAAsAAAAQAAAAFwAAABwAAAAiAAAAAgAAAAEAwAAmlwAAAMAAAAIAAAABAMAAAIAAAAAAAAACAAAAAQDAAC9Mw4AAAAAAAgAAAAEAwAAszMOAAAAAAAIAAAABAMAALgzDgAAAAAACAAAAAQDAAC6Mw4AAAAAAAgAAAAEAwAAk3ctAAAAAAAcAAAAAQYAANwAAADsAAAA/AAAAAwBAAAcAQAALAEAADwBAAAIAAAAAAQAAEHAQVEKAAAAGAAAAAECAAABAAAAAAAAAA8AAAAAAAAAAAAAAAAAAAATAAAAAQkAAGZpbGU6Ly8vVm9sdW1lcy9EQi8ACAAAAAQDAAAAIIBJ6AAAAAgAAAAABAAAQb+zU9oAAAAkAAAAAQEAAEM4NjA1NjU4LTg5MzktMzQwNy1BQUNFLTVGRTg0MzRDMDY3NRgAAAABAgAAgQAAAAEAAADvEwAAAQAAAAAAAAAAAAAACwAAAAEBAAAvVm9sdW1lcy9EQgAIAAAAAQkAAGZpbGU6Ly8vAgAAAAEBAABNMgAACAAAAAQDAAAAwD9kdAAAAAgAAAAABAAAQcG3AIW6kkMkAAAAAQEAADlBNEZCRTFBLUM3RjMtNERFNi04Mjg0LTQ3MTAxMDJBNThFMQEAAAABAQAALwAAAGAAAAD+////APAAAAAAAAAHAAAAAiAAAKQCAAAAAAAABSAAADwCAAAAAAAAECAAAEwCAAAAAAAAESAAAHgCAAAAAAAAEiAAAFgCAAAAAAAAEyAAAGgCAAAAAAAAICAAAAgCAAAAAAAABAAAAAMDAAAA8AAABAAAAAMDAAAAAAAABAAAAAMDAAABAAAAIAAAAAEGAAAYAwAAJAMAADADAAAkAwAAJAMAACQDAAAkAwAAJAMAAKgAAAD+////AQAAALACAAANAAAABBAAALgAAAAAAAAABRAAAEwBAAAAAAAAEBAAAIABAAAAAAAAQBAAAHABAAAAAAAAACAAADwDAAAAAAAAAiAAACgCAAAAAAAABSAAAKABAAAAAAAAECAAACAAAAAAAAAAESAAANwBAAAAAAAAEiAAALwBAAAAAAAAEyAAAMwBAAAAAAAAICAAAAgCAAAAAAAAENAAAAQAAAAAAAAA
                    </bookmark>
                </asset>
                <format
                    id='r6'
                    frameDuration='1000/29869s'
                    width='1920'
                    height='1080'
                    colorSpace='1-1-1 (Rec. 709)'
                />
                <format
                    id='r7'
                    name='FFVideoFormat720p2398'
                    frameDuration='1001/24000s'
                    width='1280'
                    height='720'
                    colorSpace='1-1-1 (Rec. 709)'
                />
                <asset
                    id='r8'
                    name='ghost in a Shell AMV  Edit'
                    uid='4F4A1795D9CC161508F432F9361F6248'
                    src='file:///Volumes/DB/final%20cut/Untitled.fcpbundle/11-08-2017/Original%20Media/ghost%20in%20a%20Shell%20AMV%20%20Edit.mp4'
                    start='0s'
                    duration='15933/1000s'
                    hasVideo='1'
                    format='r7'
                    hasAudio='1'
                    audioSources='1'
                    audioChannels='2'
                    audioRate='44100'
                >
                    <bookmark>
                        Ym9vazwEAAAAAAQQMAAAADak/7bFXuxH6YPtbd7ZWmNBXEb6r0JtOVZDxg2SMPcQXAMAAAQAAAADAwAAABgAKAcAAAABAQAAVm9sdW1lcwACAAAAAQEAAERCAAAJAAAAAQEAAGZpbmFsIGN1dAAAABIAAAABAQAAVW50aXRsZWQuZmNwYnVuZGxlAAAKAAAAAQEAADExLTA4LTIwMTcAAA4AAAABAQAAT3JpZ2luYWwgTWVkaWEAAB4AAAABAQAAZ2hvc3QgaW4gYSBTaGVsbCBBTVYgIEVkaXQubXA0AAAcAAAAAQYAABAAAAAgAAAALAAAAEAAAABcAAAAcAAAAIgAAAAIAAAABAMAAJpcAAADAAAACAAAAAQDAAACAAAAAAAAAAgAAAAEAwAAvTMOAAAAAAAIAAAABAMAALMzDgAAAAAACAAAAAQDAAC4Mw4AAAAAAAgAAAAEAwAAujMOAAAAAAAIAAAABAMAACAWFwAAAAAAHAAAAAEGAADUAAAA5AAAAPQAAAAEAQAAFAEAACQBAAA0AQAACAAAAAAEAABBwSPiqQAAABgAAAABAgAAAQAAAAAAAAAPAAAAAAAAAAAAAAAAAAAAEwAAAAEJAABmaWxlOi8vL1ZvbHVtZXMvREIvAAgAAAAEAwAAACCASegAAAAIAAAAAAQAAEG/s1PaAAAAJAAAAAEBAABDODYwNTY1OC04OTM5LTM0MDctQUFDRS01RkU4NDM0QzA2NzUYAAAAAQIAAIEAAAABAAAA7xMAAAEAAAAAAAAAAAAAAAsAAAABAQAAL1ZvbHVtZXMvREIACAAAAAEJAABmaWxlOi8vLwIAAAABAQAATTIAAAgAAAAEAwAAAMA/ZHQAAAAIAAAAAAQAAEHBtwCFupJDJAAAAAEBAAA5QTRGQkUxQS1DN0YzLTRERTYtODI4NC00NzEwMTAyQTU4RTEBAAAAAQEAAC8AAABgAAAA/v///wDwAAAAAAAABwAAAAIgAACcAgAAAAAAAAUgAAA0AgAAAAAAABAgAABEAgAAAAAAABEgAABwAgAAAAAAABIgAABQAgAAAAAAABMgAABgAgAAAAAAACAgAAAAAgAAAAAAAAQAAAADAwAAAPAAAAQAAAADAwAAAAAAAAQAAAADAwAAAQAAACAAAAABBgAAEAMAABwDAAAoAwAAHAMAABwDAAAcAwAAHAMAABwDAACoAAAA/v///wEAAACoAgAADQAAAAQQAACwAAAAAAAAAAUQAABEAQAAAAAAABAQAAB4AQAAAAAAAEAQAABoAQAAAAAAAAAgAAA0AwAAAAAAAAIgAAAgAgAAAAAAAAUgAACYAQAAAAAAABAgAAAgAAAAAAAAABEgAADUAQAAAAAAABIgAAC0AQAAAAAAABMgAADEAQAAAAAAACAgAAAAAgAAAAAAABDQAAAEAAAAAAAAAA==
                    </bookmark>
                </asset>
                <format id='r9' name='FFVideoFormatRateUndefined' />
            </resources>
            <library location='file:///Volumes/DB/final%20cut/Untitled.fcpbundle/'>
                <event
                    name='11-08-2017'
                    uid='7D59C36E-A218-4896-AFC1-647E91CBDF67'
                >
                    <Project />
                </event>
                {/* <smart-collection name='Projects' match='all'>
                    <match-clip rule='is' type='project' />
                </smart-collection>
                <smart-collection name='All Video' match='any'>
                    <match-media rule='is' type='videoOnly' />
                    <match-media rule='is' type='videoWithAudio' />
                </smart-collection>
                <smart-collection name='Audio Only' match='all'>
                    <match-media rule='is' type='audioOnly' />
                </smart-collection>
                <smart-collection name='Stills' match='all'>
                    <match-media rule='is' type='stills' />
                </smart-collection>
                <smart-collection name='Favorites' match='all'>
                    <match-ratings value='favorites' />
                </smart-collection> */}
            </library>
        </fcpxml>
    )
}