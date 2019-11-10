import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import RecentTeas from './RecentTeas'

describe(`RecentTeas Component`, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Router><RecentTeas /></Router>, div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
})