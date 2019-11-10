import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import TeaPageInfo from './TeaPageInfo'

describe(`TeaPageInfo Component`, () => {
  const tea = [
    {
      id: 1,
      year: 2008,
      name: 'Test Tea',
      collectionid: 1,
      vendor: 'Lucas',
      quantity: 100,
      cost: 80,
      link: 'https://www.google.com/'
    }
]
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Router><TeaPageInfo tea={tea} /></Router>, div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
})