import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'
import './CollectionPage.css'

function Collection() {
    return (
      <main className='Collection'>
        <Nav />
        <section className="container">
            <h3>Collection - Ripe</h3>
            <label htmlFor='sort'>Sort:</label>
            <select>
            <option>Name</option>
            <option>Year</option>
            <option>Company</option>
            </select>
            <ul>
                <li><Link to='/tea/dark-depths'>2018 Crimson Lotus Tea - Dark Depths</Link></li>
            </ul>
        </section>
      </main>
    );
  }
  
  export default Collection;