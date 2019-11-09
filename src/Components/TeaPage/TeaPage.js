import React from 'react'
import { Link } from 'react-router-dom'
import { getSessionsForTea, getTea } from '../../collections-helpers'
import ApiContext from '../../ApiContext'
import config from '../../config'
import Nav from '../Nav/Nav'
import SessionItem from '../SessionItem/SessionItem'
import AddSessionTeaPage from '../AddSessionTeaPage/AddSessionTeaPage'
import './TeaPage.css'


export default class TeaPage extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = ApiContext

  handleDeleteTea = e => {
    e.preventDefault()
    const { teaId } = this.props.match.params

    fetch(`${config.API_ENDPOINT}/tea/${teaId}`, {
        method: 'DELETE',
        headers: {
        'content-type': 'application/json'
        },
    })
    .then(res => {
        if (!res.ok)
            return res.json().then(event => console.log(event))
    })
    .then(() => {
        this.context.deleteTea(teaId)
        this.props.history.push(`/dashboard`)
    })
    .catch(error => {
        console.error({ error })
    })
  }


  render() {
    const { teas=[] } = this.context
    const { sessions=[] } = this.context
    const { teaId } = this.props.match.params
    const teaInfo = getTea(teas, teaId)
    const teaSessions = getSessionsForTea(sessions, teaId)
    return (
      <main className='TeaPage'>
        <Nav />
        <section className="container">
        {teaInfo.map(tea =>
          <div key={tea.id}>
            <h3>{tea.year} {tea.vendor} - {tea.name}</h3>
            <h4>{tea.quantity}g</h4>
            <h5>Purchased for: ${tea.cost}.00</h5>
            <a href={`${tea.link}`}>Link</a>
            <p><Link to={`/collection/${tea.collectionid}`}>Back to Collection</Link></p>
            <br />
            <button onClick={this.handleDeleteTea}>Delete Tea</button>
            <button><Link to={`/edit/tea/${tea.id}`}>Edit Tea</Link></button>
          </div>
          )}
        </section>
        <section>
        <h3>Sessions:</h3>
        {teaSessions.map(session =>
          <SessionItem session={session} key={session.id}/>
        )}
        </section>
        <section>
          {teaInfo.map(tea => 
            <AddSessionTeaPage key={tea.id} name={tea.name} id={tea.id}/>
          )}
        </section>
      </main>
    );
  }
  }
  