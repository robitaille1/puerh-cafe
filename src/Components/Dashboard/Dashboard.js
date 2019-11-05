import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'
import AddTeaForm from '../AddTeaForm/AddTeaForm'
import AddSessionForm from '../AddSessionForm/AddSessionForm'
import './Dashboard.css'

function Dashboard() {
    return (
      <main className='Dashboard'>
        <Nav />
        <section class="container collections">
            <h3>Collections</h3>
            <div class="collection"><Link to='/collection/ripe'>Ripe - 1 Tea</Link></div>
            <div class="collection"><a href='/dashboard'>Young Raw - 11 teas</a></div>
            <div class="collection"><a href='/dashboard'>Aged Raw - 5 Teas</a></div>
            <label for='collection-name'>Add New Collection:</label>
            <input type='text' name='collection-name'></input>
            <button type='submit'>Submit</button>
        </section>
        <AddTeaForm />
        <AddSessionForm />
      </main>
    );
  }
  
  export default Dashboard;
  