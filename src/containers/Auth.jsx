import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser, loginUser } from '../actions/authActions';

import RegisterForm from '../components/registerForm';
import LoginForm from '../components/logInForm';

class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleRegister(values) {
    this.setState({
       email : values.email,
        password : values.password })
    setTimeout(() => {
      const { email, password } = this.state
      this.props.registerUser({
        email,password,})
    }, 1000)
   }

   handleLogin(values) {
     this.setState({
        email : values.email,
         password : values.password })
     setTimeout(() => {
       const { email, password } = this.state
       this.props.loginUser({
         email,password,})
     }, 1000)
   }
  render(){
    return (
    <div>
     <div>
       <RegisterForm
         onSubmit={(values) => this.handleRegister(values)}
       />
       </div>
       <div>
       <LoginForm
         onSubmit={(values) => this.handleLogin(values)}
        />
     </div>
    </div>
);
  }
}

const mapStateToProps = (state) => {
  const signedIn = state.authentication;
  return { signedIn };
}

export default connect(mapStateToProps, {registerUser, loginUser})(Authentication)

export { Authentication }
