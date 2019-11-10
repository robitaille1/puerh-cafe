import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'
import AddTeaForm from '../AddTeaForm/AddTeaForm'
import AddSessionForm from '../AddSessionForm/AddSessionForm'
import ApiContext from '../../ApiContext'
import RecentTeas from '../RecentTeas/RecentTeas'
import { countTeasForCollection } from '../../collections-helpers'
import './Dashboard.css'
import AddCollectionForm from '../AddCollectionForm/AddCollectionForm'

export default class Dashboard extends React.Component {
  static contextType = ApiContext

  teaDisplay = () => {
    if(countTeasForCollection <= 1 ){
      return 'Tea'
    } else {
      return 'Teas'
    }
  }

  handleAddTea = teaId => {
    this.props.history.push(`/tea/${teaId}`)
  }
  
  render(){
    const { collections=[] } = this.context
    const { teas=[] } = this.context

    return (
      <main className='Dashboard'>
        <Nav />
        <section className="container collections">
            <h3>Collections</h3>
            {collections.map(collection => 
              <div key={collection.id} className="collection"><Link to={`/collection/${collection.id}`}>{collection.name} - {countTeasForCollection(teas, collection.id)} {this.teaDisplay()}</Link></div>
            )}
            <AddCollectionForm />
        </section>
        <RecentTeas />
        <AddTeaForm onAddTea={this.handleAddTea} collections={collections}/>
        <AddSessionForm onAddTea={this.handleAddTea} />
      </main>
    );
  }
}
  

  