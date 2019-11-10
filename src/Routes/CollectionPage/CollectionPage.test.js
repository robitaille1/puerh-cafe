import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import CollectionPage from './CollectionPage'

describe(`CollectionPage Component`, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Router><CollectionPage /></Router>, div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
})