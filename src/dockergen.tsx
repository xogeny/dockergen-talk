import React = require('react');
import { Heading, Slide, List, ListItem, CodePane } from 'spectacle';
import { medHeader } from './common';

export const session = `
# Install dockergen
$ npm install dockergen --dev

# Generate a Dockerfile (one time only)
$ dockergen generate --expose 4444

# Build a Docker image
$ dockergen build --name xogeny/dockergen-talk

# Run the app
$ docker run -p 5000:4444 xogeny/dockergen-talk
`
export const dockergen = [
    <Slide key={1}>
        <Heading size={1} fit lineHeight={1} textColor="white">
            <code>dockergen</code>
        </Heading>
    </Slide>,
    <Slide key={2}>{medHeader("Node Configuration")}
        <List>
            <ListItem>Version of Node</ListItem>
            <ListItem>Pulling in dependencies</ListItem>
            <ListItem>Private modules</ListItem>
            <ListItem><code>yarn</code> instead of <code>npm</code></ListItem>
            <ListItem>Scripts to run during build</ListItem>
            <ListItem>Environment variables</ListItem>
            <ListItem>Ports</ListItem>
            <ListItem>Container "<code>CMD</code>"</ListItem>
        </List>
    </Slide>,
    <Slide key={4}>
        <div style={{ textAlign: "left" }}>
            <CodePane textSize="4vh" source={session} lang="bash"></CodePane>
            <br />
            <a href="https://github.com/xogeny/dockergen">https://github.com/xogeny/dockergen</a>
        </div>
    </Slide>,
];
