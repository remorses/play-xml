import { render, JSXXML } from 'jsx-xml'

const C = ({ children }) => {
    return <xxx>{children}</xxx>
}

const xml = render(
    <test>
        <C>
            1 + {2} = {3}
        </C>
    </test>,
    {
        doctype: 'fcpxml',
        createOptions: {
            // headless: true,
            encoding: 'UTF-8',
        },
        endOptions: { pretty: true },
    },
) // jsx input
console.log(xml) // xml output: <?xml version="1.0"?><test x="3">1 + 2 = 3</test>
