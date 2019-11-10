import React, { Component } from 'react'
import ApiContext from '../../Context/ApiContext'
import config from '../../config'
import './AddSessionTeaPage.css'

export default class AddSessionFormTeaPage extends Component {
  static defaultProps = {
    history: {
      push: () => { }
    },
  }

  state = { 
    quantity: '',
    parameters: '',
    notes: '',
    rating: ''
  };

  static contextType = ApiContext;

  handleFields = e => this.setState({ [e.target.name]: e.target.value });

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
        this.setState({
          quantity: '',
          parameters: '',
          notes: '',
          rating: '', 
        })
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
                    <input 
                      name='quantity' 
                      placeholder="7g" 
                      onChange={this.handleFields}
                      value={this.state.quantity}
                    />
                    <br />
                    <label htmlFor="parameters">Parameters: </label>
                    <textarea 
                      name='parameters' 
                      onChange={this.handleFields}
                      value={this.state.parameters}
                    /> 
                    <br />
                    <label htmlFor="notes">Tasting Notes: </label>
                    <textarea name='notes' 
                      onChange={this.handleFields}
                      value={this.state.notes}
                    /> 
                    <br />
                    <label htmlFor="rating">Rating: </label>
                    <input 
                      name='rating' 
                      placeholder="rating" 
                      onChange={this.handleFields}
                      value={this.state.rating}/>
                    <br />
                    <button>Submit</button>
                </form>
        </section>
      </main>
    );
  }
}