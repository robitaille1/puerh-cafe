import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../../Components/Nav/Nav'
import AddTeaForm from '../../Components/AddTeaForm/AddTeaForm'
import AddSessionForm from '../../Components/AddSessionForm/AddSessionForm'
import ApiContext from '../../Context/ApiContext'
import RecentTeas from '../../Components/RecentTeas/RecentTeas'
import { countTeasForCollection } from '../../collections-helpers'
import './Dashboard.css'
import AddCollectionForm from '../../Components/AddCollectionForm/AddCollectionForm'

export default class Dashboard extends React.Component {
  
  static contextType = ApiContext

  handleAddTea = teaId => {
    this.props.history.push(`/tea/${teaId}`)
  }
  
  render(){
    const { collections=[] } = this.context
    const { teas=[] } = this.context

    return (
      <main className='Dashboard'>
        <Nav />
        <div className='container-div'>
        <section className="container collections">
            <h3>Collections</h3>
            {collections.map(collection => 
            <Link className='collection-link' key={collection.id} to={`/collection/${collection.id}`}>
              <div 
                className='dash-collection-item collection' 
              >
                {collection.name}  
                <span>
                 {countTeasForCollection(teas, collection.id)}
                 {countTeasForCollection(teas, collection.id) === 1? ' Tea' : ' Teas'}
                </span>
              </div>
            </Link>
            )}
            <AddCollectionForm />
        </section>
        <RecentTeas />
        <AddTeaForm onAddTea={this.handleAddTea} collections={collections}/>
        <AddSessionForm onAddTea={this.handleAddTea} />
        </div>
      </main>
    );
  }
}
  

  