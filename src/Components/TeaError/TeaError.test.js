import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import TeaError from './TeaError'

describe(`TeaError Component`, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Router><TeaError /></Router>, div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
})