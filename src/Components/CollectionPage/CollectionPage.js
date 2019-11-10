import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'
import ApiContext from '../../ApiContext'
import config from '../../config'
import { getTeasForCollection, getCollection } from '../../collections-helpers'
import CollectionError from '../CollectionError/CollectionError'
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

    const collectionIdNumber = Number(collectionId)

    fetch(`${config.API_ENDPOINT}/collection/${collectionIdNumber}`, {
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
        this.context.deleteCollection(collectionIdNumber)
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
    const collectionInfo = getCollection(collections, collectionId) || null
    const collectionTeas = getTeasForCollection(teas, collectionId) || null
    return (
      <main className='Collection'>
        <Nav />
        {collectionInfo.length === 0 ? 
        <CollectionError /> : 
        <section className="container">
            {collectionInfo.map(collection =>
              <h3 key={collection.id}>Collection: {collection.name}</h3>
            )}
            <button onClick={this.handleDeleteCollection}>Delete Collection</button>
            <br />
            <form onChange={this.handleSort}>
            <label htmlFor='sort'>Sort:</label>
              <select name='sort'>
                <option value={'name'}>Name</option>
                <option value={'year'}>Year</option>
                <option value={'vendor'}>Vendor</option>
              </select>
            </form>
            <ul>
              {collectionTeas.map(tea => 
                <li key={tea.id}><Link to={`/tea/${tea.id}`}>{tea.year} {tea.vendor} - {tea.name}</Link></li>
              )}
            </ul>
        </section>
        }
      </main>
    );
  }
  }
  