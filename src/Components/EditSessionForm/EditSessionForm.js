import React, { Component } from 'react'
import config from '../../config'
import ApiContext from '../../Context/ApiContext'
import Nav from '../Nav/Nav'

export default class EditSessionForm extends Component {
  static defaultProps = {
    history: {
      push: () => { }
    },
  }

  state = {
    id: '',
    teaid: '',
    name: '',
    quantity: '',
    parameters: '',
    notes: '',
    rating: ''
  };
  
  static contextType = ApiContext;

  componentDidMount() {
    this.setState({
        id: this.props.session.id,
        teaid: this.props.session.teaid,
        name: this.props.session.name,
        quantity: this.props.session.quantity,
        parameters: this.props.session.parameters,
        notes: this.props.session.notes,
        rating: this.props.session.rating,
    })
  }

  handleChangeQuantity= e => {
    this.setState({ quantity: e.target.value })
  };

  handleChangeParameters= e => {
    this.setState({ parameters: e.target.value })
  };

  handleChangeNotes = e => {
    this.setState({ notes: e.target.value })
  };

  handleChangeRating = e => {
    this.setState({ rating: e.target.value })
  };

  handleClickCancel = () => {
    this.props.onCancel()
  };

  handleSubmit = e => {
    e.preventDefault()
    const { id, name, teaid, quantity, parameters, notes, rating  } = this.state
    const updatedSession = { id, name, teaid, quantity, parameters, notes, rating  }
    fetch(`${config.API_ENDPOINT}/session/${this.props.id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedSession),
    })
    .then(res => res.text())
      .then(() => {
        this.resetFields(updatedSession)
        this.context.updateSession(updatedSession)
        this.props.onSubmitEdit()
      })
      .catch(error => {
        console.error(error)
      })
  }

  resetFields = (newFields) => {
    this.setState({
      quantity: newFields.quantity || '',
      parameters: newFields.parameters || '',
      notes: newFields.notes || '',
      rating: newFields.rating || '',
    })
  }

  render(){
    const { name, quantity, parameters, notes, rating } = this.state
    return (
        <main className='AddSessionForm'>
        <Nav />
        <section className="add">
            <h3 className='section-title'>New Session</h3>
                <form onSubmit={this.handleSubmit} className='form-container'>
                    <label htmlFor="tea-name">Tea Name: </label>
                    <p>{name}</p>
                    <br />
                    <label htmlFor="quantity">Quantity: </label>
                    <input name='quantity' value={quantity} onChange={this.handleChangeQuantity} />
                    <br />
                    <label htmlFor="parameters">Parameters: </label>
                    <textarea name='parameters' id='parameters' value={parameters} onChange={this.handleChangeParameters}></textarea>   
                    <br />
                    <label htmlFor="notes">Tasting Notes: </label>
                    <textarea name='notes' id='notes' value={notes} onChange={this.handleChangeNotes}></textarea> 
                    <br />
                    <label htmlFor="rating">Rating: </label>
                    <input name='rating'  value={rating} onChange={this.handleChangeRating} />
                    <br />
                    <button>Submit</button>
                    <button type='button' onClick={this.handleClickCancel}>Cancel</button>
                </form>
        </section>
      </main>
    );
    }
  }
  