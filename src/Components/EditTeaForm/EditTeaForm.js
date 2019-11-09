import React, { Component } from 'react'
import config from '../../config'
import ApiContext from '../../ApiContext'
// import { getTea } from '../../collections-helpers';
// import { Link } from 'react-router-dom'
// import './AddTeaForm.css'
import Nav from '../Nav/Nav'

export default class EditTeaForm extends Component {
  static defaultProps = {
    history: {
      push: () => { }
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
    // const { teas=[] } = this.context
    // const { teaId } = this.props.match.params
    // const teaInfo = getTea(teas, teaId)
    // {teaInfo.map(tea =>
    //   this.setState({
    //     tea
    //   })
    //   )}
    // console.log(teaInfo[0])
    // this.setState({
    //     id: teaInfo[0].id,
    //     year: teaInfo[0].year,
    //     name: teaInfo[0].name,
    //     collectionid: teaInfo[0].collectionid,
    //     vendor: teaInfo[0].vendor,
    //     quantity: teaInfo[0].quantity,
    //     cost: teaInfo[0].cost,
    //     link: teaInfo[0].link,
    // })
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
    const { teaId } = this.props.match.params
    const { id, year, name, collectionid, vendor, quantity, cost, link  } = this.state
    const updatedTea = { id, year, name, collectionid, vendor, quantity, cost, link  }
    fetch(`${config.API_ENDPOINT}/tea/${teaId}`, {
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
        this.props.history.push(`/tea/${updatedTea.id}`)
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
        <Nav/>
        <section className="add">
            <h3 className='section-title'>Edit Tea</h3>
                <form onSubmit={this.handleSubmit} className='form-container'>
                    <br/>
                    <label htmlFor="tea-year">Year: </label>
                    <input name='tea-year' value={year} onChange={this.handleChangeYear}/>
                    <br/>
                    <label htmlFor="tea-name">Tea Name: </label>
                    <input name='tea-name' value={name} onChange={this.handleChangeName}/>
                    <br />
                    <label htmlFor="vendor">Vendor: </label>
                    <input name='vendor' value={vendor} onChange={this.handleChangeVendor} />
                    <br />
                    <label htmlFor="quantity">Quantity: </label>
                    <input name='quantity' value={quantity} onChange={this.handleChangeQuantity} />
                    <br />
                    <label htmlFor="cost">Cost: </label>
                    <input name='cost' value={cost} onChange={this.handleChangeCost} />
                    <br />
                    <label htmlFor="link">Link: </label>
                    <input name='link' value={link} onChange={this.handleChangeLink} />
                    <br />
                    <button>Submit</button>
                    <button type='button' onClick={this.handleClickCancel}>Cancel</button>
                </form>
        </section>
      </main>
    );
    }
  }
  