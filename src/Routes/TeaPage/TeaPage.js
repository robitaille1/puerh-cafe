import React from 'react'
import { Link } from 'react-router-dom'
import { getSessionsForTea, getTea } from '../../collections-helpers'
import ApiContext from '../../Context/ApiContext'
import config from '../../config'
import Nav from '../../Components/Nav/Nav'
import SessionItem from '../../Components/SessionItem/SessionItem'
import AddSessionTeaPage from '../../Components/AddSessionTeaPage/AddSessionTeaPage'
import TeaError from '../../Components/TeaError/TeaError'
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

    const teaIdNumber = Number(teaId)

    fetch(`${config.API_ENDPOINT}/tea/${teaIdNumber}`, {
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
        this.context.deleteTea(teaIdNumber)
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
        <div className='container-div'>
        {teaInfo.length === 0 ? 
          <TeaError/> :
          <div>
            <section className="container tea-info">
              {teaInfo.map(tea =>
                <div key={tea.id}>
                  <div className='tea-name-div'>
                    <h3 className='tea-name'>{tea.year} {tea.vendor} - {tea.name}</h3>
                  </div>
                  <h4 className='tea-quantity'>{tea.quantity}g</h4>
                  <h5 className='tea-cost'>Purchased for: ${tea.cost}.00</h5>
                  <a target="_blank" rel="noopener noreferrer" href={`${tea.link}`} className='tea-link'>Link</a>
                  <div className='btn-div'>
                    <p><Link className='collection-link-tea' to={`/collection/${tea.collectionid}`}>Back to Collection</Link></p>
                    <button className='btn-class' onClick={this.handleDeleteTea}>Delete Tea</button>
                    <button className='btn-class'><Link className='btn-link' to={`/edit/tea/${tea.id}`}>Edit Tea</Link></button> 
                  </div>
                </div>
              )}
            </section>
            {teaSessions.length > 0 ? <section className='tea-sessions'>
              <h3>Sessions:</h3>
              {teaSessions.map(session =>
                <SessionItem session={session} key={session.id}/>
              )}
            </section> : null }
            <section>
              {teaInfo.map(tea => 
                <AddSessionTeaPage key={tea.id} name={tea.name} id={tea.id}/>
              )}
            </section>
          </div>
        }
        </div>
      </main>
    );
  }
}
  