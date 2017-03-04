import React = require('react');
import { Deck, Heading, Slide } from 'spectacle';
import { whatIsDocker } from './what';
import { whyDocker } from './why';
import { withNode } from './node';
import { dockergen} from './dockergen';

var createTheme = require('spectacle/lib/themes/default').default;

console.log("createTheme = ", createTheme);
const theme = createTheme({
    primary: "#0087C9",
    secondary: "yellow"
}, {
    primary: "Helvetica",
    secondary: { name: "Droid Serif", googleFont: true, styles: ["400", "700i"] }
});

console.log("theme = ", theme);

export class Presentation extends React.Component<void, void> {
    render() {
        return (
            <Deck transition={["slide"]} transitionDuration={500} theme={theme}>
                <Slide>
                    <Heading size={1} fit lineHeight={1} textColor="white">
                        Docker, Node and <code>dockergen</code>
                    </Heading>
                </Slide>
                {whatIsDocker}
                {whyDocker}
                {withNode}
                {dockergen}
            </Deck>
        );
    }
}