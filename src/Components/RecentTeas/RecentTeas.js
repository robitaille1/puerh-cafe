import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ApiContext from '../../Context/ApiContext'


export default class RecentTeas extends Component {
  static contextType = ApiContext
  
  render() {
    const { teas } = this.context
    teas.sort((a, b) => (a.id < b.id) ? 1 : -1)
    return (
      <main className='RecentTeas'>
        <h3>Recently Added Teas</h3>
        <section>
            {teas.slice(0, 5).map(tea => 
                <Link to={`/tea/${tea.id}`} key={tea.id}>
                    <h4>{tea.year} {tea.name}</h4>
                </Link>
            )}
            <Link to={`/all/tea`}>
                <button>All Teas</button>
            </Link>
        </section>
      </main>
    );
  }
}
  