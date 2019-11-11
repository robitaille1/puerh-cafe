import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

function LandingPage() {
    return (
      <main className='LandingPage'>
          <section>
            <div className='landing-div'>
            <h1 className='app-name'>PUERH / CAFE</h1>
            <div className='landing-section-description'>
              <h2>An all in one place for puerh tea drinkers</h2>
            </div>
            </div>
            <div className='landing-section'>
              <div className='landing-section-cont'>
              <h3>Puerh Tea</h3>
              <p>Puerh is an aged, fermented tea that comes from the Yunnan province in China. Pu-erh tea is unique because it's made from a natural fermentation process. Puerh ages like wine, and can take many years to do so. Because of this, puerh tea drinkers tend to purchase many teas to add to their collection.</p>
              </div>
            </div> 
            <div className='landing-section'>
              <div className='landing-section-cont'>
              <h3>Add teas to your collection</h3>
              <p>As your stash grows, keep track of your teas by adding them, and keeping them organized into collections.</p>
              </div>
            </div> 
            <div className='landing-section'>
              <div className='landing-section-cont'>
              <h3>Add session and tasting notes to your teas</h3>
              <p>Puerh teas change. Keep track of how your teas are aging by recording your tasting notes for each session.</p>
              <div className='btn-div'>
              <Link to='/dashboard'>
                <button className='btn-class'>Home</button>
              </Link> 
              </div>
              </div>
            </div>
          </section>
      </main>
    );
  }
  
  export default LandingPage;