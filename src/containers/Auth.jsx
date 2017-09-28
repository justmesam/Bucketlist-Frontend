import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser, loginUser } from "../actions/authActions";
import {Tabs, Tab} from "material-ui/Tabs";
import RegisterForm from "../components/registerForm";
import LoginForm from "../components/logInForm";

class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
    <div >
      <Tabs style={{width : "40vw"}}>
    <Tab style={{
      backgroundColor : "#A1887F"}}
      label="Register" >
      <RegisterForm
        onSubmit={(values) => this.handleRegister(values)}
      />
    </Tab>
    <Tab label="Login" >
      <LoginForm
        onSubmit={(values) => this.handleLogin(values)}
       />
    </Tab>
  </Tabs>
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
