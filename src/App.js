import React from 'react';
import { Route } from 'react-router-dom'
import './App.css'
import LandingPage from './Components/LandingPage/LandingPage'
import SignUpForm from './Components/SignUpForm/SignUpForm'
import LoginForm from './Components/LoginForm/LoginForm'
import Dashboard from './Components/Dashboard/Dashboard'
import Collection from './Components/CollectionPage/CollectionPage'
import TeaPage from './Components/TeaPage/TeaPage'

function App() {
  return (
    <main className='App'>
      <Route exact path='/' component={LandingPage}/>
      <Route path='/signup' component={SignUpForm}/>
      <Route path='/login' component={LoginForm} />
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/collection/ripe' component={Collection}/>
      <Route path='/tea/dark-depths' component={TeaPage}/>
    </main>
  );
}

export default App;
