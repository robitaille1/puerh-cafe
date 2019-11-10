import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'
import './index.css';
import App from './App';

ReactDOM.render(
    <BrowserRouter>
        <ScrollToTop>
            <App />
        </ScrollToTop>
    </BrowserRouter>, 
    document.getElementById('root')
);
