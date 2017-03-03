import React = require('react');
import { Deck, Heading } from 'spectacle';

export class Presentation extends React.Component<void, void> {
    render() {
        return (
            <Deck>
                <Heading size={1} fit caps lineHeight={1} textColor="black">
                    Spectacle
                </Heading>
                <Heading size={1} fit caps>
                    A ReactJS Presentation Library
                </Heading>
                <Heading size={1} fit caps textColor="black">
                    Where You Can Write Your Decks In JSX
                </Heading>
            </Deck>
        );
    }
}