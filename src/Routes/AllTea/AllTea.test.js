import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import AllTea from './AllTea'

describe(`AllTea Component`, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Router><AllTea/></Router>, div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
})
