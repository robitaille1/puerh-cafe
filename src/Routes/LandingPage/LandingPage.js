import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

function LandingPage() {
    return (
      <main className='LandingPage'>
          <section>
            <h1 className='app-name'>PUERH / CAFE</h1>
            <div className='landing-section-description'>
              <h2>An all in one place for puerh tea drinkers</h2>
            </div>
            <div className='landing-section'>
              <h3>Add a tea to your collection</h3>
              <p>As your stash grows, keep track of the teas you have by adding new teas, and keeping them organized into collections.</p>
            </div> 
            <div className='landing-section'>
              <h3>Add session and tasting notes to your teas</h3>
              <p>Teas change. Keep track of how your teas are aging by recording your tasting notes for each session.</p>
            </div>
            <Link to='/dashboard'>
              <button>Home</button>
            </Link>
          </section>
      </main>
    );
  }
  
  export default LandingPage;