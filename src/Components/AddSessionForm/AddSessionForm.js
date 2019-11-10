import React, { Component } from 'react'
import ApiContext from '../../Context/ApiContext'
import config from '../../config'
import './AddSessionForm.css'
import { findTeaId } from '../../collections-helpers';

export default class AddSessionForm extends Component {
  static defaultProps = {
    history: {
      push: () => { }
    },
  }

  static contextType = ApiContext;

  handleSubmit = (event) => {
    event.preventDefault()
    const { teas=[] } = this.context
    const idForTea = findTeaId(teas, event.target['tea-name'].value);
    const newSession = {
      name: event.target['tea-name'].value,
      teaid: idForTea.id,
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
        this.props.onAddTea(session.teaid)
      })
      .catch(error => {
        console.error({ error })
      })
}

  render() {
    const { teas=[] } = this.context
    
    return (
      <main className='AddSessionForm'>
        <section className="add">
            <h3 className='section-title'>New Session</h3>
                <form onSubmit={this.handleSubmit} className='form-container'>
                    <label htmlFor="tea-name">Tea Name: </label>
                    <select name='tea-name'>
                        <option value={true} disabled>Pick a tea</option>
                        {teas.map(tea => 
                          <option key={tea.id} value={tea.name}>{tea.year} {tea.vendor} - {tea.name}</option>
                        )}
                    </select>
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
  