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
                  <div className='session-form-item'>
                    <label htmlFor="tea-name">Tea Name: </label>
                    <select className='tea-select' name='tea-name'>
                      <option value={true} disabled>Pick a tea</option>
                      {teas.map(tea => 
                        <option key={tea.id} value={tea.name}>{tea.year} {tea.vendor} - {tea.name}</option>
                      )}
                    </select>
                  </div>
                  <div className='session-form-item'>
                    <label htmlFor="quantity">Quantity: </label>
                    <input 
                      type='number'
                      className='number-input'
                      name='quantity' 
                      placeholder="in grams" 
                    />
                  </div>
                  <div className='session-form-item'>
                    <label htmlFor="parameters">Parameters: </label>
                    <textarea placeholder='water temp, steep time etc.. ' name='parameters' size="17"></textarea>
                  </div>
                  <div className='session-form-item'>
                    <label htmlFor="notes">Notes: </label>
                    <textarea placeholder='earthy, sweet etc..' name='notes' size="17"></textarea> 
                  </div>
                  <div className='session-form-item'>
                    <label htmlFor="rating">Rating: </label>
                    <input className='number-input' name='rating' placeholder="10" size="17" />
                  </div>
                    <button>Submit</button>
                </form>
        </section>
      </main>
    );
  }
}
  