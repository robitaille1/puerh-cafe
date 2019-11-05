import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'
import './TeaPage.css'

function TeaPage() {
    return (
      <main className='TeaPage'>
        <Nav />
        <section class="container">
            <h3>2018 Crimson Lotus Tea - Dark Depths</h3>
            <h4>200g - Amount remaining: 180g</h4>
            <h5>Purchased for: $49.99</h5>
            <a href="https://crimsonlotustea.com/collections/shou-ripe-puerh/products/2018-dark-depths-shou-ripe-puerh-free-shipping">Link</a>
            <p>Collection: <Link to='/collection/ripe'>Ripe</Link></p>
            
        </section>
        <section>
        <h3>Sessions:</h3>
        <button>New Session</button>
        <div class="session">
            <p><span class="bold">Quantity:</span> 10g</p>
            <p><span class="bold">Parameters:</span> Very hot fresh boiled water, 150ml gaiwan. Started steeping at 5 seconds and incrementally increased from there</p>
            <p><span class="bold">Tasting Notes:</span> Very dark and earthy. First few steeps were light, but it became much more full bodied after the 10 second steeps.</p>
            <p><span class="bold">Rating:</span> 4</p>
        </div>
        <div class="session">
            <p><span class="bold">Quantity:</span> 10g</p>
            <p><span class="bold">Parameters:</span> Very hot fresh boiled water, 150ml yixing clay teapot. Steeps starting at 5 seconds. Kept the teapot as hot as possible</p>
            <p><span class="bold">Tasting Notes:</span>Dark, viscous steeps that lasted for a long time. Almost had the consistency of coffee. Very long lasting flavours. Got maybe 20 steeps out of it.</p>
            <p><span class="bold">Rating:</span> 5</p>
        </div>
        </section>
      </main>
    );
  }
  
  export default TeaPage;