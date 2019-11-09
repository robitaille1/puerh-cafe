import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import { Form } from 'react-advanced-form'
import ApiContext from '../../ApiContext'
import config from '../../config'
import './AddSessionTeaPage.css'

export default class AddSessionFormTeaPage extends Component {
  static defaultProps = {
    history: {
      push: () => { }
    },
  }

  static contextType = ApiContext;

  handleSubmit = (event) => {
    event.preventDefault()

    const newSession = {
      name: this.props.name,
      teaid: this.props.id,
      quantity: event.target['quantity'].value,
      parameters: event.target['parameters'].value,
      notes: event.target['notes'].value,
      rating: event.target['rating'].value,
    } 

    fetch(`${config.API_ENDPOINT}/session`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newSession),
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(event => Promise.reject(event))
        return res.json()
      })
      .then(session => {
        this.context.addSession(session)
        this.props.history.push(`/tea/${session.teaid}`)
      })
      .catch(error => {
        console.error({ error })
      })
}

  render() {
    return (
      <main className='AddSessionForm'>
        <section className="add">
            <h3 className='section-title'>New Session</h3>
                <form onSubmit={this.handleSubmit} className='form-container'>
                    <p className='tea-name-session'>{this.props.name}</p>
                    <br />
                    <label htmlFor="quantity">Quantity: </label>
                    <input name='quantity' placeholder="7g" />
                    <br />
                    <label htmlFor="parameters">Parameters: </label>
                    <textarea name='parameters'></textarea>   
                    <br />
                    <label htmlFor="notes">Tasting Notes: </label>
                    <textarea name='notes'></textarea> 
                    <br />
                    <label htmlFor="rating">Rating: </label>
                    <input name='rating' placeholder="rating" />
                    <br />
                    <button>Submit</button>
                </form>
        </section>
      </main>
    );
  }
}