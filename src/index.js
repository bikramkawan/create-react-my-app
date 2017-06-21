import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './component/Layout';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const app = document.getElementById('root');
ReactDOM.render(<Layout />, app);
registerServiceWorker();
