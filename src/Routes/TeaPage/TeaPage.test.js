import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import TeaPage from './TeaPage'

describe(`TeaPage Component`, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Router><TeaPage /></Router>, div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
})