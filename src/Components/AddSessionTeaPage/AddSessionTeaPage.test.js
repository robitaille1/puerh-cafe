import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import AddSessionTeaPage from './AddSessionTeaPage'

describe(`AddSessionTeaPage Component`, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Router><AddSessionTeaPage/></Router>, div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
})
