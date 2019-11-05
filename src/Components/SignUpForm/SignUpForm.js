import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'
import './SignUpForm.css'

function SignUpForm() {
    return (
      <main className='SignUpForm'>
        <Nav />
        <section className="form-container">
            <h3>Create an account</h3>
            <form className='signup-form'>
              <div className='input-element'>
                <label htmlFor="username">Name </label>
                <br />
                <input name='name' placeholder="name" />
              </div>
              <div className='input-element'>
                <label htmlFor="email">Email </label>
                <br />
                <input name='email' type='email' placeholder="email" />
              </div>
              <div className='input-element'>
                <label htmlFor="username">Username </label>
                <br />
                <input name='username' placeholder="username" />
              </div>
              <div className='input-element'> 
                <label htmlFor="username">Password </label>
                <br />
                <input name='password' placeholder="password" />
              </div>
                <Link to='dashboard'>
                    <button>Submit</button>
                </Link>
                <p>Already have an account?</p>
                <Link to='/login'>
                    <button>Log In</button>
                </Link>
            </form>
        </section>
      </main>
    );
  }
  
  export default SignUpForm;