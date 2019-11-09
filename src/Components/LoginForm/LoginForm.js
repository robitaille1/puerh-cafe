import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import TokenService from '../../services/token-service'
import Nav from '../Nav/Nav'
import './LoginForm.css'

class LoginForm extends Component {

  // handleSubmitBasicAuth = ev => {
  //   ev.preventDefault()
  //   const { user_name, password } = ev.target

  //   TokenService.saveAuthToken(
  //     TokenService.makeBasicAuthToken(user_name.value, password.value)
  //   )

  //   user_name.value = ''
  //   password.value = ''
  //   this.props.onLoginSuccess()
  // }


  render(){
    return (
      <main className='LoginForm'>
        <Nav />
        <section className="form-container">
        <h3>Please login to access your dashboard</h3>
        {/* <form onSubmit={this.handleSubmitBasicAuth} className='login-form'> */}
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
  }
  
  export default LoginForm;