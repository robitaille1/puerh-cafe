import React from 'react'
// import { Link } from 'react-router-dom'
import './AddSessionForm.css'

function AddSessionForm() {
    return (
      <main className='AddSessionForm'>
        <section className="add">
            <h3 className='section-title'>New Session</h3>
                <form className='form-container'>
                    <label htmlFor="tea-name">Tea Name: </label>
                    <select name='tea-name'>
                        <option value={true} disabled>Pick a tea</option>
                        <option>2018 Crimson Lotus Tea Dark Depths</option>
                    </select>
                    <br />
                    <label htmlFor="quantity">Quantity: </label>
                    <input name='quantity' placeholder="7g" />
                    <br />
                    <label htmlFor="parameters">Parameters: </label>
                    <textarea></textarea>   
                    <br />
                    <label htmlFor="notes">Tasting Notes: </label>
                    <textarea></textarea> 
                    <br />
                    <label htmlFor="rating">Rating: </label>
                    <input name='rating' placeholder="rating" />
                    <br />
                    <button>Submit</button>
                </form>
        </section>
      </main>
    );
  }
  
  export default AddSessionForm;