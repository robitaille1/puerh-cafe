import React from 'react'
import ApiContext from '../../ApiContext'
import config from '../../config'

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
            <label htmlFor='name'>Add New Collection: </label>
            <input 
              type='text' 
              name='name'
              onChange={this.handleFields}
              value={this.state.name} 
            />
            <button type='submit'>Submit</button>
        </form>
      </main>
    );
  }
}
  