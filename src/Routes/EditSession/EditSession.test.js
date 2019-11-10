import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import EditSession from './EditSession'

describe(`EditSession Component`, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Router><EditSession /></Router>, div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
})