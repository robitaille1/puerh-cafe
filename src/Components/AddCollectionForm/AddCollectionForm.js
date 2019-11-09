import React from 'react'
// import { Link } from 'react-router-dom'
// import './AddSessionForm.css'
// import { countTeasForCollection } from '../../collections-helpers';
import ApiContext from '../../ApiContext'
import config from '../../config'

export default class AddCollectionForm extends React.Component  {
    static defaultProps = {
        history: {
          push: () => { }
        },
      }

      static contextType = ApiContext;

      handleSubmit = (event) => {
        event.preventDefault()
        const newCollection = {
          name: event.target['collection-name'].value,
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
          })
          .catch(error => {
            console.error({ error })
          })
    }

  render() {
    return (
      <main className='AddCollectionForm'>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor='collection-name'>Add New Collection: </label>
            <input type='text' name='collection-name'></input>
            <button type='submit'>Submit</button>
        </form>
      </main>
    );
  }
}
  