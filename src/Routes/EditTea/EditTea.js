import React from 'react'
import { getTea } from '../../collections-helpers';
import ApiContext from '../../Context/ApiContext'
import EditTeaForm from '../../Components/EditTeaForm/EditTeaForm'


export default class EditSession extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = ApiContext

  handleCancel = () => {
    const { teaId } = this.props.match.params
    this.props.history.push(`/tea/${teaId}`)
  };

  onEditTea = () => {
    const { teaId } = this.props.match.params
    this.props.history.push(`/tea/${teaId}`)
  }

  render() {
    const { teas=[] } = this.context
    const { teaId } = this.props.match.params
    const teaInfo = getTea(teas, teaId)
    return (
      <main className='TeaPage'>
          {teaInfo.map(tea => 
            <EditTeaForm onCancel={this.handleCancel} onSubmitEdit={this.onEditTea} key={tea.id} id={tea.id} tea={tea} />
          )}
      </main>
    );
  }
  }