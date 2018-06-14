// main.js
// const greeter = require('./Greeter');
// document.querySelector("#root").appendChild(greeter());

// React写法
import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

import './main.css'; //引入css文件

render(<Greeter />, document.getElementById('root'));