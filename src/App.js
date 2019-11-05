import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css'
import LandingPage from './Components/LandingPage/LandingPage'
import SignUpForm from './Components/SignUpForm/SignUpForm'
import LoginForm from './Components/LoginForm/LoginForm'
import Dashboard from './Components/Dashboard/Dashboard'
import Collection from './Components/CollectionPage/CollectionPage'
import TeaPage from './Components/TeaPage/TeaPage'
import ApiContext from './ApiContext'
import config from './config'

class App extends Component {
  state = {
    users: [],
    collections: [],
    teas: [],
    sessions: []
  }

  componentDidMount() {
    Promise.all([
        fetch(`${config.API_ENDPOINT}/collection`),
        fetch(`${config.API_ENDPOINT}/tea`),
        fetch(`${config.API_ENDPOINT}/session`)
    ])
        .then(([collectionRes, teaRes, sessionRes]) => {
            if (!collectionRes.ok)
                return collectionRes.json().then(e => Promise.reject(e));
            if (!teaRes.ok)
                return teaRes.json().then(e => Promise.reject(e));
            if (!sessionRes.ok)
                return sessionRes.json().then(e => Promise.reject(e));

            return Promise.all([collectionRes.json(), teaRes.json(), sessionRes.json()]);
        })
        .then(([collections, teas, sessions]) => {
            this.setState({collections, teas, sessions});
        })
        .catch(error => {
            console.error({error});
        });
 }

  render(){
    const value = {
      collections: this.state.collections,
      teas: this.state.teas,
      sessions: this.state.sessions
    }
    return (
      <ApiContext.Provider value={value}>
        <main className='App'>
          <Route exact path='/' component={LandingPage}/>
          <Route path='/signup' component={SignUpForm}/>
          <Route path='/login' component={LoginForm} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/collection/ripe' component={Collection}/>
          <Route path='/tea/dark-depths' component={TeaPage}/>
        </main>
      </ApiContext.Provider>
    );
  }
}

export default App;
