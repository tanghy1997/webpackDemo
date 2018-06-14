// Greeter.js
// const data = require('./data..json');

// module.exports = function() {
//     var greet = document.createElement('div');
//     greet.textContent = data.greetText;
//     return greet;
// };

// react写法
import React, { Component } from 'react'
import data from './data..json';
import styles from './Greeter.css'; //导入样式表

class Greeter extends Component{
    render() {
        return (
            <div className={styles.root}>
                {data.greetText}
            </div>
        )
    }
}

export default Greeter