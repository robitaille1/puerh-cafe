import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

function LandingPage() {
    return (
      <main className='LandingPage'>
          <section>
            <h1 className='app-name'>PUERH / CAFE</h1>
            <h2>An all in one place for puerh tea drinkers</h2>
            <p>A place to keep track of your puerh storage and inventory.</p>
            <p>Leave tasting and session notes as well.</p>
            {/* <Link to='/login'>
              <button>Sign In</button>
            </Link>
            <Link to='/signup'>
              <button>Sign Up</button>
            </Link> */}
            <Link to='/dashboard'>
              <button>Home</button>
            </Link>
          </section>
      </main>
    );
  }
  
  export default LandingPage;