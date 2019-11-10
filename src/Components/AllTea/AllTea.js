import React from 'react'
import { Link } from 'react-router-dom'
import ApiContext from '../../ApiContext'
import Nav from '../Nav/Nav'



export default class TeaPage extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = ApiContext

  getCollectionName = (collectionid) => {
    const { collections } = this.context
    // eslint-disable-next-line
    const collection = collections.filter(collection => collection.id == collectionid)
    return collection[0].name
  }

  render() {
    const { teas=[] } = this.context
    teas.sort((a, b) => (a.name > b.name) ? 1 : -1)
    return (
      <main className='TeaPage'>
        <Nav />
        <section className="container">
            <ul>
                {teas.map(tea =>
                    <Link to={`/tea/${tea.id}`} key={tea.id}>
                        <li >{tea.year} {tea.name} - {tea.vendor} - <span className='bold'>Collection: {this.getCollectionName(tea.collectionid)}</span></li>
                    </Link> 
                )}
            </ul>
        </section>
      </main>
    );
  }
  }
  