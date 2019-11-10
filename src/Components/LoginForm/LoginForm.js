import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import TokenService from '../../services/token-service'
import Nav from '../Nav/Nav'
import './LoginForm.css'

export default class LoginForm extends Component {

  // static defaultProps = {
  //   onLoginSuccess: () => {}
  // }

  // handleSubmitBasicAuth = (ev) => {
  //   ev.preventDefault()

  //   const user_name = ev.target['user_name']
  //   const password = ev.target['password']
       
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
        <form className='login-form'>
            <div className='input-element'>
              <label htmlFor="user_name">Username </label>
              <br/>
              <input name='user_name' placeholder="username" />
            </div>
            <div className='input-element'>
              <label htmlFor="username">Password </label>
              <br />
              <input type='password' name='password' placeholder="password" />
            </div>
            <br />
            <Link to='/dashboard'>
              <button type='submit'>Submit</button>
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
  