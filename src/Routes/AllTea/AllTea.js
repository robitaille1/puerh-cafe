import React from 'react'
import { Link } from 'react-router-dom'
import ApiContext from '../../Context/ApiContext'
import Nav from '../../Components/Nav/Nav'
import './AllTea.css'



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
        <div className='container-div'>
        <section className="container collections">
                {teas.map(tea =>
                    <Link className='collection-link'to={`/tea/${tea.id}`} key={tea.id}>
                        <div className='tea-page-item collection'>{tea.year} {tea.name} - {tea.vendor} - <span className='bold-black'>Collection: {this.getCollectionName(tea.collectionid)}</span></div>
                    </Link> 
                )}
        </section>
        </div>
      </main>
    );
  }
  }
  