import React from 'react'
// import { Link } from 'react-router-dom'
import './AddSessionForm.css'

function AddSessionForm() {
    return (
      <main className='AddSessionForm'>
        <section class="add">
            <h3 className='section-title'>New Session</h3>
                <form className='form-container'>
                    <label for="tea-name">Tea Name: </label>
                    <select name='tea-name'>
                        <option selected='true' disabled>Pick a tea</option>
                        <option>2018 Crimson Lotus Tea Dark Depths</option>
                    </select>
                    <br />
                    <label for="quantity">Quantity: </label>
                    <input name='quantity' placeholder="7g" />
                    <br />
                    <label for="parameters">Parameters: </label>
                    <textarea></textarea>   
                    <br />
                    <label for="notes">Tasting Notes: </label>
                    <textarea></textarea> 
                    <br />
                    <label for="rating">Rating: </label>
                    <input name='rating' placeholder="rating" />
                    <br />
                    <button>Submit</button>
                </form>
        </section>
      </main>
    );
  }
  
  export default AddSessionForm;