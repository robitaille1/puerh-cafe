import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'
import './LoginForm.css'

function LoginForm() {
    return (
      <main className='LoginForm'>
        <Nav />
        <section className="form-container">
        <h3>Please login to access your dashboard</h3>
        <form className='login-form'>
            <div className='input-element'>
              <label htmlFor="username">Username </label>
              <br/>
              <input name='username' placeholder="username" />
            </div>
            <div className='input-element'>
              <label htmlFor="username">Password </label>
              <br />
              <input name='password' placeholder="password" />
            </div>
            <br />
            <Link to='/dashboard'>
                <button>Submit</button>
            </Link>
            <p>Don't have an account?</p>
              <Link to='/signup'>
                  <button>Sign Up</button>
              </Link>
        </form>
        </section>
      </main>
    );
  }
  
  export default LoginForm;