import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { injectGlobal } from 'styled-components';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

injectGlobal`
    html, body, #root{
        height: 100%;
        margin: 0;
    }
`
