import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'
import AddTeaForm from '../AddTeaForm/AddTeaForm'
import AddSessionForm from '../AddSessionForm/AddSessionForm'
import ApiContext from '../../ApiContext'
import { countTeasForCollection } from '../../collections-helpers'
import './Dashboard.css'

export default class Dashboard extends React.Component {
  static contextType = ApiContext

  teaDisplay = () => {
    if(countTeasForCollection <= 1 ){
      return 'Tea'
    } else {
      return 'Teas'
    }
  }
  
  render(){
    const { collections=[] } = this.context
    const { teas=[] } = this.context
    // const { sessions=[] } = this.context

    return (
      <main className='Dashboard'>
        <Nav />
        <section className="container collections">
            <h3>Collections</h3>
            {collections.map(collection => 
              <div key={collection.id} className="collection"><Link to={`/collection/${collection.name}`}>{collection.name} - {countTeasForCollection(teas, collection.id)} {this.teaDisplay()}</Link></div>
            )}
            <label htmlFor='collection-name'>Add New Collection:</label>
            <input type='text' name='collection-name'></input>
            <button type='submit'>Submit</button>
        </section>
        <AddTeaForm />
        <AddSessionForm />
      </main>
    );
  }
}
  

  