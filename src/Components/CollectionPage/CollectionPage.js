import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'
import ApiContext from '../../ApiContext'
import config from '../../config'
import { getTeasForCollection, getCollection } from '../../collections-helpers'
import './CollectionPage.css'

export default class CollectionPage extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = ApiContext

  handleDeleteCollection = e => {
    e.preventDefault()
    const { collectionId } = this.props.match.params

    fetch(`${config.API_ENDPOINT}/collection/${collectionId}`, {
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
        this.context.deleteCollection(collectionId)
        this.props.history.push(`/dashboard`)
    })
    .catch(error => {
        console.error({ error })
    })
}

  render() {
    const { teas=[] } = this.context
    const { collections=[] } = this.context
    const { collectionId } = this.props.match.params
    const collectionInfo = getCollection(collections, collectionId) 
    const collectionTeas = getTeasForCollection(teas, collectionId)
    return (
      <main className='Collection'>
        <Nav />
        <section className="container">
            {collectionInfo.map(collection =>
              <h3 key={collection.id}>Collection: {collection.name}</h3>
            )}
            <button onClick={this.handleDeleteCollection}>Delete Collection</button>
            <br />
            <label htmlFor='sort'>Sort:</label>
            <select>
            <option>Name</option>
            <option>Year</option>
            <option>Company</option>
            </select>
            <ul>
              {collectionTeas.map(tea => 
                <li key={tea.id}><Link to={`/tea/${tea.id}`}>{tea.year} {tea.vendor} - {tea.name}</Link></li>
              )}
            </ul>
        </section>
      </main>
    );
  }
  }
  