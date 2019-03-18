import App from './js/components/App.jsx';
import ReactDOM from 'react-dom';
import React from 'react';
import AccessServer from './js/lib/AccessServer';

ReactDOM.render(<App AccessServer={AccessServer}/>, document.getElementById('app'));