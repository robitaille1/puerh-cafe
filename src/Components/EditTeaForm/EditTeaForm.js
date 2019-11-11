import React, { Component } from 'react'
import config from '../../config'
import ApiContext from '../../Context/ApiContext'

export default class EditTeaForm extends Component {
  static defaultProps = {
    history: {
      push: () => { },
      id: ''
    },
  }

  state = {
    id: '',
    year: '',
    name: '',
    collectionid: '',
    vendor: '',
    quantity: '',
    cost: '',
    link: '',
  };
  
  static contextType = ApiContext;

  componentDidMount() {
    this.setState({
      id: this.props.tea.id,
      year: this.props.tea.year,
      name: this.props.tea.name,
      collectionid: this.props.tea.collectionid,
      vendor: this.props.tea.vendor,
      quantity: this.props.tea.quantity,
      cost: this.props.tea.cost,
      link: this.props.tea.link,
  })
  }

  handleChangeYear = e => {
    this.setState({ year: e.target.value })
  };

  handleChangeName = e => {
    this.setState({ name: e.target.value })
  };

  handleChangeVendor = e => {
    this.setState({ vendor: e.target.value })
  };

  handleChangeQuantity= e => {
    this.setState({ quantity: e.target.value })
  };

  handleChangeCost= e => {
    this.setState({ cost: e.target.value })
  };

  handleChangeLink = e => {
    this.setState({ link: e.target.value })
  };

  handleClickCancel = () => {
    this.props.onCancel()
  };

  handleSubmit = e => {
    e.preventDefault()
    const { id, year, name, collectionid, vendor, quantity, cost, link  } = this.state
    const updatedTea = { id, year, name, collectionid, vendor, quantity, cost, link  }
    fetch(`${config.API_ENDPOINT}/tea/${this.props.id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedTea),
    })
    .then(res => res.text())
      .then(() => {
        this.resetFields(updatedTea)
        this.context.updateTea(updatedTea)
        this.props.onSubmitEdit()
      })
      .catch(error => {
        console.error(error)
      })
  }

  resetFields = (newFields) => {
    this.setState({
      name: newFields.name || '',
      year: newFields.year || '',
      vendor: newFields.vendor || '',
      quantity: newFields.quantity || '',
      cost: newFields.cost || '',
      link: newFields.link || '',
    })
  }

  render(){
    const { year, name, vendor, quantity, cost, link } = this.state
    return (
      <main className='AddTeaForm'>
        <section className="add">
            <h3 className='section-title'>Edit Tea</h3>
                <form onSubmit={this.handleSubmit} className='form-container'>
                    <div className='tea-form-item'>
                      <label htmlFor="tea-year">Year: </label>
                      <input name='tea-year' value={year} onChange={this.handleChangeYear}/>
                    </div>
                    <div className='tea-form-item'>
                      <label htmlFor="tea-name">Tea Name: </label>
                      <input name='tea-name' value={name} onChange={this.handleChangeName}/>
                    </div>
                    <div className='tea-form-item'>
                      <label htmlFor="vendor">Vendor: </label>
                      <input name='vendor' value={vendor} onChange={this.handleChangeVendor} />
                    </div>
                    <div className='tea-form-item'>
                      <label htmlFor="quantity">Quantity: </label>
                      <input name='quantity' value={quantity} onChange={this.handleChangeQuantity} />
                    </div>
                    <div className='tea-form-item'>
                      <label htmlFor="cost">Cost: </label>
                      <input name='cost' value={cost} onChange={this.handleChangeCost} />
                    </div>
                    <div className='tea-form-item'>
                      <label htmlFor="link">Link: </label>
                      <input name='link' value={link} onChange={this.handleChangeLink} />
                    </div>
                    <div className='btn-div'>
                      <button className='btn-class'>Submit</button>
                      <button type='button' onClick={this.handleClickCancel} className='btn-class'>Cancel</button>
                    </div>
                </form>
        </section>
      </main>
    );
    }
  }
  