import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter} from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';

const app = document.getElementById('root');

ReactDOM.render(
    <HashRouter>
        <App/>
    </HashRouter>, app);
registerServiceWorker();
