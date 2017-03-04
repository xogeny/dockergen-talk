import React = require('react')
import { Slide, BlockQuote, Quote, Cite } from 'spectacle';
import { bigHeader, medHeader } from './common';

export const whatIsDocker = [
    <Slide key={1}>
        {bigHeader("What is Docker?")}
    </Slide>,
    <Slide key={2}>
        <BlockQuote textColor={"yellow"}>
            <Quote textColor={"yellow"}>
                Docker is a tool designed to make it easier to create, deploy,
                        and run applications by using containers.
                    </Quote>
            <Cite><code>opensource.com</code></Cite>
        </BlockQuote>
    </Slide>,
    <Slide key={3}>{medHeader("Build - Ship - Run")}</Slide>,
]
