import { render, JSXXML } from 'jsx-xml'

export const Project = ({
    eventName = 'Untitled Event',
    projectName = 'Untitled Project',
    assets = [],
    children = [],
}) => {
    const OUTPUT_FORMAT = 'r-output-format'
    return (
        <fcpxml version='1.8'>
            <resources>
                <format
                    id={OUTPUT_FORMAT}
                    name='FFVideoFormat720p24'
                    frameDuration='100/6000s'
                    width='1280'
                    height='720'
                    // colorSpace='1-1-1 (Rec. 709)'
                />
                {assets}
            </resources>

            <event name={eventName}>
                <project name={projectName}>
                    <sequence format={OUTPUT_FORMAT}>
                        <spine lane='0'>{children}</spine>
                    </sequence>
                </project>
            </event>
        </fcpxml>
    )
}
