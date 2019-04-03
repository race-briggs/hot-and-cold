import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './hot-and-cold';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Game />, document.getElementById('root'));


serviceWorker.unregister();
