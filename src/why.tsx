import React = require('react');
import { Slide, List, ListItem, Image } from 'spectacle';
import { bigHeader, medHeader } from './common';

export const whyDocker = [
    <Slide key={1}>{bigHeader("Why Docker?")}</Slide>,
    <Slide key={2}>{bigHeader("Resources")}
        <br/>
        {medHeader("Process group avoids redundancy")}
        <List>
            <ListItem>Shared libraries</ListItem>
            <ListItem>Host OS</ListItem>
            <ListItem>Layered filessystem</ListItem>
        </List>
    </Slide>,
    <Slide key={4}>
        <Image src="./images/techglimpse-Container-vs-VMs.jpg"></Image>
    </Slide>,
    <Slide key={5}>{bigHeader("Stateless")}
        <List>
            <ListItem>Consistent initial state</ListItem>
            <ListItem>Volumes</ListItem>
            <ListItem>Databases</ListItem>
        </List>
    </Slide>,
    <Slide key={4}>{bigHeader("Isolated")}
        <List>
            <ListItem>Distinct file systems</ListItem>
            <ListItem>Dedicated cluster network</ListItem>
            <ListItem>No exposed ports by default</ListItem>
            <ListItem>FS writes don't mutate host FS</ListItem>
        </List>
    </Slide>,
];