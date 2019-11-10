import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import AddSessionForm from './AddSessionForm'

describe(`AddSessionForm Component`, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Router><AddSessionForm/></Router>, div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
})
