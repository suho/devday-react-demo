import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import HelloMessage from './components/hello-message';

const message = <HelloMessage name="Su Ho V." />

ReactDOM.render(message, document.getElementById('root'));
