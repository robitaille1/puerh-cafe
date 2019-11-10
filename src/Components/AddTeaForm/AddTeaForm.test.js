import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import AddTeaForm from './AddTeaForm'

describe(`AddTeaForm Component`, () => {

  const collections = [
    {
        id: 1,
        name: "Test Collection",
    }
  ]  


  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Router><AddTeaForm collections={collections}/></Router>, div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
})
