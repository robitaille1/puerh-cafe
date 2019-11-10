import React, { Component } from 'react'
import config from '../../config'
import ApiContext from '../../Context/ApiContext'
import { findCollectionId } from '../../collections-helpers';
import './AddTeaForm.css'

export default class AddTeaForm extends Component {
  static defaultProps = {
    history: {
      push: () => { }
    },
  }

  static contextType = ApiContext;

  handleSubmit = (event) => {
    event.preventDefault()
    const { collections=[] } = this.context
    const idForCollection = findCollectionId(collections, event.target['collection-name'].value);
    const newTea = {
      year: event.target['teaYear'].value,
      name: event.target['teaName'].value,
      collectionid: idForCollection.id,
      vendor: event.target['vendor'].value,
      quantity: event.target['quantity'].value,
      cost: event.target['cost'].value,
      link: event.target['link'].value,
    }
    fetch(`${config.API_ENDPOINT}/tea`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newTea),
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(event => Promise.reject(event))
        return res.json()
      })
      .then(tea => {
        this.context.addTea(tea)
        this.props.onAddTea(tea.id)
      })
      .catch(error => {
        console.error({ error })
      })
}

  render(){
    return (
      <main className='AddTeaForm'>
        <section className="add">
            <h3 className='section-title'>Add A Tea</h3>
                <form onSubmit={this.handleSubmit} className='form-container'>
                    <label htmlFor="collection-name">Collection Name: </label>
                    <select name='collection-name'>
                    {this.props.collections.map(collection => 
                          <option key={collection.id} value={collection.name}>{collection.name}</option>
                        )}
                    </select>
                    <br/>
                    <label htmlFor="teaYear">Year: </label>
                    <input 
                      name='teaYear' 
                      placeholder="2019" 
                     />
                    <br/>
                    <label htmlFor="teaName">Tea Name: </label>
                    <input 
                      name='teaName' 
                      placeholder="tea name" 
                    />
                    <br />
                    <label htmlFor="vendor">Vendor: </label>
                    <input 
                      name='vendor' 
                      placeholder="vendor"
                    />
                    <br />
                    <label htmlFor="quantity">Quantity: </label>
                    <input 
                      name='quantity' 
                      placeholder="quantity" 
                    />
                    <br />
                    <label htmlFor="cost">Cost: </label>
                    <input 
                      name='cost' 
                      placeholder="cost" 
                    />
                    <br />
                    <label htmlFor="link">Link: </label>
                    <input 
                      name='link' 
                      placeholder="link" 
                    />
                    <br />
                    <button>Submit</button>
                </form>
        </section>
      </main>
    );
    }
  }
  
