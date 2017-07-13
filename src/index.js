import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './component/pages/Layout';
import { HashRouter } from 'react-router-dom'


import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';
import './styles/style.css';
import './styles/animate.css'

const app = document.getElementById('root');

ReactDOM.render(
    <HashRouter>
        <Layout/>
    </HashRouter>, app);
registerServiceWorker();
