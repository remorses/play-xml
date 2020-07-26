import fs from 'fs'
import { render, JSXXML } from 'jsx-xml'
import { Wrapper } from './project'

const C = ({ children }) => {
    return <xxx>{children}</xxx>
}

const xml = render(<Wrapper />, {
    doctype: 'fcpxml',
    createOptions: {
        // headless: true,
        encoding: 'UTF-8',
    },
    endOptions: { pretty: true },
}) // jsx input

console.log(xml)
fs.writeFileSync('out.fcpxml', xml)
