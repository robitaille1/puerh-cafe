import React, { Component } from 'react'
import config from '../../config'
import { Link } from 'react-router-dom'
import ApiContext from '../../Context/ApiContext'
import './SessionItem.css'

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
              <p><span className="bold">Quantity:</span> <span className='session-desc'>{this.props.session.quantity}</span></p>
              <p><span className="bold">Parameters:</span> <br/><span className='session-desc'>{this.props.session.parameters}</span></p>
              <p><span className="bold">Tasting Notes:</span> <br/><span className='session-desc'>{this.props.session.notes}</span> </p>
              <p><span className="bold">Rating:</span> <span className='session-desc'>{this.props.session.rating}</span></p>
              <br/>
              <div className='btn-div'>
              <button className='btn-class' onClick={this.handleDeleteSession}>Delete Session</button>
              <button className='btn-class'><Link className='edit-session-btn' to={`/edit/session/${this.props.session.id}`}>Edit Session</Link></button>
              </div>
            </div>
        )
    }
}

export default SessionItem;