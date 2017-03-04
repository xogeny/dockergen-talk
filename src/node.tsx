import React = require('react');
import { Slide, CodePane } from 'spectacle';
import { bigHeader, medHeader } from './common';

// Creating a Docker image (self contained application) requires a `Dockerfile`.  Dockerfile 
// is a recipe for building a container.  For Node, the recipe should include:

//   * Version of node
//   * Pulling in dependencies
//   * Private modules
//   * Build scripts (run `npm test` during build)
//   * Environment variables (setting production, but also others)
//   * Ports to expose
//   * Script to run (default: `npm start`)

const dockerfile = `
FROM node:boron

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 8080
CMD [ "npm", "start" ]
`

export const withNode = [
    <Slide key={1}>{bigHeader("Docker + Node")}</Slide>,
    <Slide key={2}>{bigHeader("Dockerfile")}
        <br />
        {medHeader("Recipe for building image")}
    </Slide>,
    <Slide key={4}>
        <div style={{ textAlign: "left" }}>
            <CodePane textSize="4vh" source={dockerfile} lang="docker"></CodePane>
            <br />
            <a href="https://nodejs.org/en/docs/guides/nodejs-docker-webapp/">https://nodejs.org/en/docs/guides/nodejs-docker-webapp/</a>
        </div>
    </Slide>,
];