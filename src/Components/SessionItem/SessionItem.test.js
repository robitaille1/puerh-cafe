import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import SessionItem from './SessionItem'

describe(`SessionItem Component`, () => {
    const session = [
        {
          id: 1,
          teaid: 1,
          name: 'Test Tea',
          quantity: 357,
          parameters: 'test parameters',
          notes: 'test notes',
          rating: 5
        }
    ]
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Router><SessionItem session={session}/></Router>, div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
})