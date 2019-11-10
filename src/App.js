import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css'
import LandingPage from './Components/LandingPage/LandingPage'
// import SignUpForm from './Components/SignUpForm/SignUpForm'
// import LoginForm from './Components/LoginForm/LoginForm'
import Dashboard from './Components/Dashboard/Dashboard'
import CollectionPage from './Components/CollectionPage/CollectionPage'
import TeaPage from './Components/TeaPage/TeaPage'
import EditTea from './Components/EditTea/EditTea'
import EditSession from './Components/EditSession/EditSession'
import AllTea from './Components/AllTea/AllTea'
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

  handleAddCollection = collection => {
    this.setState({
        collections: [
            ...this.state.collections,
            collection
        ]
    })
  }

  handleAddTea = tea => {
    this.setState({
        teas: [
            ...this.state.teas,
            tea
        ]
    })
  }

  handleAddSession = session => {
    this.setState({
        sessions: [
            ...this.state.sessions,
            session
        ]
    })
  }

  handleDeleteCollection = collectionId => {
    this.setState({
        collections: this.state.collections.filter(collection => collection.id !== collectionId)
    })
    this.setState({
      teas: this.state.teas.filter(tea => tea.collectionid !== collectionId)
  })
  }

  handleDeleteTea = teaId => {
    this.setState({
        teas: this.state.teas.filter(tea => tea.id !== teaId)
    })
  }

  handleDeleteSession = sessionId => {
    this.setState({
        sessions: this.state.sessions.filter(session => session.id !== sessionId)
    })
  }

  handleUpdateTea = updatedTea => {
    this.setState({
      teas: this.state.teas.map(tea =>
        (tea.id !== updatedTea.id) ? tea : updatedTea
      )
    })
  }

  handleUpdateSession = updatedSession => {
    this.setState({
      sessions: this.state.sessions.map(session =>
        (session.id !== updatedSession.id) ? session : updatedSession
      )
    })
  }

 renderCollectionRoutes() {
  return (
      <>
          {['/collection/:collectionId'].map(path => (
                  <Route
                      exact
                      key={path}
                      path={path}
                      component={CollectionPage}
                  />
              ))}
      </>
      );
  }

  renderTeaRoutes() {
    return (
        <>
            {['/tea/:teaId'].map(path => (
                    <Route
                        exact
                        key={path}
                        path={path}
                        component={TeaPage}
                    />
                ))}
        </>
        );
    }

    renderEditTeaRoutes() {
      return (
        <>
          {['/edit/tea/:teaId'].map(path => (
            <Route
                exact
                key={path}
                path={path}
                component={EditTea}
            />
          ))}
        </>
      );
    }

    renderEditSessionRoutes() {
      return (
        <>
          {['/edit/session/:sessionId'].map(path => (
            <Route
                exact
                key={path}
                path={path}
                component={EditSession}
            />
          ))}
        </>
      );
    }

    static contextType = ApiContext

  render(){
    const value = {
      collections: this.state.collections,
      teas: this.state.teas,
      sessions: this.state.sessions,
      addCollection: this.handleAddCollection,
      addTea: this.handleAddTea,
      addSession: this.handleAddSession,
      deleteCollection: this.handleDeleteCollection,
      deleteTea: this.handleDeleteTea,
      deleteSession: this.handleDeleteSession,
      updateTea: this.handleUpdateTea,
      updateSession: this.handleUpdateSession,
    }
    return (
      <ApiContext.Provider value={value}>
        <main className='App'>
          <Route exact path='/' component={LandingPage}/>
          {/* <Route path='/signup' component={SignUpForm}/>
          <Route path='/login' component={LoginForm} /> */}
          <Route path='/dashboard' component={Dashboard} />
          <Route exact path='/all/tea' component={AllTea} />
          {this.renderCollectionRoutes()}
          {this.renderTeaRoutes()}
          {this.renderEditTeaRoutes()}
          {this.renderEditSessionRoutes()}
        </main>
      </ApiContext.Provider>
    );
  }
}

export default App;
