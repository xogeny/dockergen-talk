import React = require('react');
import { Heading, Slide, List, ListItem } from 'spectacle';
import { medHeader } from './common';

export const dockergen = [
    <Slide key={1}>
        <Heading size={1} fit lineHeight={1} textColor="white">
            <code>dockergen</code>
        </Heading>
    </Slide>,
    <Slide key={10}>{medHeader("Node Configuration")}
        <List>
            <ListItem>Version of Node</ListItem>
            <ListItem>Pulling in dependencies</ListItem>
            <ListItem>Private modules</ListItem>
            <ListItem>Scripts to run during build</ListItem>
            <ListItem>Environment variables</ListItem>
            <ListItem>Ports</ListItem>
            <ListItem>Container "<code>CMD</code>"</ListItem>
        </List>
    </Slide>,
];