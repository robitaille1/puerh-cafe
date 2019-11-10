import React, { Component } from 'react'
import config from '../../config'
import { Link } from 'react-router-dom'
import ApiContext from '../../Context/ApiContext'

class SessionItem extends Component {
    static defaultProps ={
        onDeleteSession: () => {},
      }
      static contextType = ApiContext;

      handleDeleteSession = e => {
        e.preventDefault()
        const sessionId = this.props.session.id
        
        fetch(`${config.API_ENDPOINT}/session/${sessionId}`, {
            method: 'DELETE',
            headers: {
            'content-type': 'application/json'
            },
        })
        .then(res => {
            if (!res.ok)
                return res.json().then(event => console.log(event))
        })
        .then(() => {
            this.context.deleteSession(sessionId)
        })
        .catch(error => {
            console.error({ error })
        })
      }

    render() {
        return(
            <div name='session-item' key={this.props.session.id} className="session">
              <p><span className="bold">Quantity:</span> {this.props.session.quantity}</p>
              <p><span className="bold">Parameters:</span> {this.props.session.parameters}</p>
              <p><span className="bold">Tasting Notes:</span> {this.props.session.notes}</p>
              <p><span className="bold">Rating:</span> {this.props.session.rating}</p>
              <br/>
              <button onClick={this.handleDeleteSession}>Delete Session</button>
              <button><Link to={`/edit/session/${this.props.session.id}`}>Edit Session</Link></button>
            </div>
        )
    }
}

export default SessionItem;