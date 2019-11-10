import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import EditTea from './EditTea'

describe(`EditTea Component`, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Router><EditTea /></Router>, div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
})