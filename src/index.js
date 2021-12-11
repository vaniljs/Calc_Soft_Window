require('file-loader?name=[name].[ext]!./index.html')


import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app/app';
import './app/app.sass';


window.addEventListener('load', () => {
    if (document.querySelector('.calcSoftWindow')) {
        document.querySelectorAll('.calcSoftWindow').forEach(calc => {
            ReactDOM.render(<App />, calc)
        });
    }
});

