import React, { Component } from 'react'
import config from '../../config'
import ApiContext from '../../Context/ApiContext'

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
        <section className="add">
            <h3 className='section-title'>Edit Session</h3>
                <form onSubmit={this.handleSubmit} className='form-container'>
                    <p className='tea-name-session'>{name}</p>
                    <div className='session-form-item'>
                      <label htmlFor="quantity">Quantity: </label>
                      <input name='quantity' type='number' value={quantity} onChange={this.handleChangeQuantity} className='number-input'/>
                    </div>
                    <div className='session-form-item'>
                      <label htmlFor="parameters">Parameters: </label>
                      <textarea name='parameters' id='parameters' value={parameters} onChange=  {this.handleChangeParameters} className='session-area'></textarea>
                    </div>
                    <div className='session-form-item'>
                      <label htmlFor="notes">Notes: </label>
                      <textarea name='notes' id='notes' value={notes} onChange={this.handleChangeNotes} className='session-area'></textarea>
                    </div>
                    <div className='session-form-item'>
                      <label htmlFor="rating">Rating: </label>
                      <input name='rating' type='number' value={rating} onChange={this.handleChangeRating} className='number-input'/>
                    </div>
                    <div className='btn-div'>
                      <button className='btn-class'>Submit</button>
                      <button type='button' onClick={this.handleClickCancel} className='btn-class'>Cancel</button>
                    </div>
                </form>
        </section>
      </main>
    );
    }
  }
  