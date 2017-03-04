import React = require('react');
import { Heading } from 'spectacle';

export const bigHeader = (title: string) => (
    <Heading size={1} lineHeight={1} textColor="white">{title}</Heading>
);

export const medHeader = (title: string) => (
    <Heading size={4} lineHeight={1} textColor="LightYellow">{title}</Heading>
);
