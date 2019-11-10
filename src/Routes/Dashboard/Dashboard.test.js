import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './Dashboard'

describe(`Dashboard Component`, () => {

  const collections = [
    {
        id: 1,
        name: "Test Collection",
    }
  ]  


  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Router><Dashboard collections={collections}/></Router>, div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
})