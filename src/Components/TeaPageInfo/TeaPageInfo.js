import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class TeaPageInfo extends Component {
    render() {
        return(
            <div name='session-item' key={this.props.tea.id} className="session">
              <h3>{this.props.tea.year} {this.props.tea.vendor} - {this.props.tea.name}</h3>
                <h4>{this.props.tea.quantity}g</h4>
                <h5>Purchased for: ${this.props.tea.cost}.00</h5>
                <a href={`${this.props.tea.link}`}>Link</a>
                <p><Link to={`/collection/${this.props.tea.collectionid}`}>Back to Collection</Link></p>
                <br />
                <button onClick={this.handleDeleteTea}>Delete Tea</button>
            </div>
        )
    }
}

export default TeaPageInfo;