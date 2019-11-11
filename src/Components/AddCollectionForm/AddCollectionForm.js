import React from 'react'
import ApiContext from '../../Context/ApiContext'
import config from '../../config'
import './AddCollectionForm.css'

export default class AddCollectionForm extends React.Component  {
    static defaultProps = {
        history: {
          push: () => { }
        },
      }

      state = { 
        name: "" 
      };

      static contextType = ApiContext;

      handleFields = e => this.setState({ [e.target.name]: e.target.value });

      handleSubmit = (event) => {
        event.preventDefault()
        const newCollection = {
          name: event.target['name'].value,
          userid: 1,
        }
        fetch(`${config.API_ENDPOINT}/collection`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newCollection),
        })
          .then(res => {
            if (!res.ok)
              return res.json().then(event => Promise.reject(event))
            return res.json()
          })
          .then(collection => {
            this.context.addCollection(collection)
            this.props.history.push(`/dashboard`)
            this.setState({name: ''})
          })
          .catch(error => {
            console.error({ error })
          })
    }

  render() {
    return (
      <main className='AddCollectionForm'>
        <form onSubmit={this.handleSubmit}>
            <label className='add-collection-label' htmlFor='name'>Add New Collection </label>
            <br />
            <input 
              type='text' 
              name='name'
              onChange={this.handleFields}
              value={this.state.name} 
              size="17"
            />
            <button type='submit'>Submit</button>
        </form>
      </main>
    );
  }
}
  