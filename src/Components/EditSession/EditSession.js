import React from 'react'
// import { Link } from 'react-router-dom'
import { getSession} from '../../collections-helpers'
import ApiContext from '../../ApiContext'
import EditSessionForm from '../EditSessionForm/EditSessionForm'


export default class EditSession extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = ApiContext

  handleCancelSession = () => {
    const { sessions=[] } = this.context
    const { sessionId } = this.props.match.params
    const sessionInfo = getSession(sessions, sessionId)
    this.props.history.push(`/tea/${sessionInfo[0].teaid}`)
  };

  onEditSession = () => {
    const { sessions=[] } = this.context
    const { sessionId } = this.props.match.params
    const sessionInfo = getSession(sessions, sessionId)
    this.props.history.push(`/tea/${sessionInfo[0].teaid}`)
  }

  render() {
    const { sessions=[] } = this.context
    const { sessionId } = this.props.match.params
    const sessionInfo = getSession(sessions, sessionId)
    return (
      <main className='TeaPage'>
          {sessionInfo.map(session => 
            <EditSessionForm onCancel={this.handleCancelSession} onSubmitEdit={this.onEditSession} id={session.id} key={session.id} session={session} />
          )}
      </main>
    );
  }
  }