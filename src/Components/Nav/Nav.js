import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
    return (
      <main className='Nav'>
        <nav className='navbar'>
            <h1 className='nav-link'><Link className='nav-company' to='/dashboard'>PUERH / CAFE</Link></h1>
        </nav>
      </main>
    );
  }
  
  export default Nav;