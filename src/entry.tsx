import React = require('react');
import ReactDOM = require('react-dom');
import { Presentation } from './presentation';

let element = document.getElementById("view");
console.log("document = ", document);
console.log("element = ", element);
ReactDOM.render(<Presentation/>, element);