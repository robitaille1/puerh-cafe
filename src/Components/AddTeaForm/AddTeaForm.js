import React from 'react'
// import { Link } from 'react-router-dom'
import './AddTeaForm.css'

function AddTeaForm() {
    return (
      <main className='AddTeaForm'>
        <section class="add">
            <h3 className='section-title'>Add A Tea</h3>
                <form className='form-container'>
                    <label for="username">Tea Name: </label>
                    <input name='tea-name' placeholder="tea name"/>
                    <br />
                    <label for="vendor">Vendor: </label>
                    <input name='vendor' placeholder="vendor" />
                    <br />
                    <label for="quantity">Quantity: </label>
                    <input name='quantity' placeholder="quantity" />
                    <br />
                    <label for="cost">Cost: </label>
                    <input name='cost' placeholder="cost" />
                    <br />
                    <label for="link">Link: </label>
                    <input name='link' placeholder="link" />
                    <br />
                    <button>Submit</button>
                </form>
        </section>
      </main>
    );
  }
  
  export default AddTeaForm;