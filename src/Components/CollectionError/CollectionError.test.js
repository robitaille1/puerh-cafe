import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import CollectionError from './CollectionError'

describe(`CollectionError Component`, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Router><CollectionError/></Router>, div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
})