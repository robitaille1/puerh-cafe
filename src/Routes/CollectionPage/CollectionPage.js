import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../../Components/Nav/Nav'
import ApiContext from '../../Context/ApiContext'
import config from '../../config'
import { getTeasForCollection, getCollection } from '../../collections-helpers'
import CollectionError from '../../Components/CollectionError/CollectionError'
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
    collectionTeas.sort((a, b) => (a.vendor > b.vendor) ? 1 : -1)
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
            <ul>
              {collectionTeas.map(tea => 
                <Link key={tea.id} className='tea-item' to={`/tea/${tea.id}`}>
                  <li>{tea.year} {tea.vendor} - {tea.name}</li>
                </Link>
              )}
            </ul>
        </section>
        }
      </main>
    );
  }
  }
  