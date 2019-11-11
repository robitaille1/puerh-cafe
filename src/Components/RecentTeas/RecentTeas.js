import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ApiContext from '../../Context/ApiContext'
import './RecentTeas.css'


export default class RecentTeas extends Component {
  static contextType = ApiContext
  
  render() {
    const { teas } = this.context
    teas.sort((a, b) => (a.id < b.id) ? 1 : -1)
    return (
      <main className='RecentTeas'>
        <div className='recent-teas-div'>
          <h3 className='recent-tea-header'>Recently Added Teas</h3>
          <section className='recent-tea'>
            {teas.slice(0, 5).map(tea => 
                <Link className='recent-tea-link' to={`/tea/${tea.id}`} key={tea.id}>
                    <h4 className='recent-tea-name'>{tea.year} {tea.name}</h4>
                </Link>
            )}
          </section>
        <Link to={`/all/tea`}>
          <button className='btn-class'>View All Teas</button>
        </Link>
        </div>
        
      </main>
    );
  }
}
  