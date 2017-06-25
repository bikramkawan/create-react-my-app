import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './component/pages/Layout';


import {
    BrowserRouter as Router,
} from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker';
import './index.css';

const app = document.getElementById('root');

ReactDOM.render(
    <Router>
        <Layout/>

    </Router>, app);
registerServiceWorker();
