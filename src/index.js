import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';

import './index.css';

const div = document.getElementById('root');
ReactDOM.render(
    <CounterApp 
        value={8}
    />, 
    div);