import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import AddCollectionForm from './AddCollectionForm'

describe(`AddCollectionForm Component`, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Router><AddCollectionForm/></Router>, div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
})
