import React from "react";
import { connect } from "react-redux";
import TextField from "material-ui/TextField"
import { Field, reduxForm, formValueSelector } from "redux-form";

const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = "Required"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address"
  }
  if (!values.password) {
    errors.password = "Required"
  }
  return errors
}


const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) =>
  <TextField
    fullWidth={true}
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />


let LoginForm = props => {
  const { handleSubmit, pristine, reset, submitting} = props
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="email"
        type="text"
        component={renderTextField}
        label="Email"
      />
      <Field name="password" type="password" component={renderTextField} label="Password" />
      <div>
        <button className="btn btn-outline-info btn-lg btn-block" type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button className="btn btn-outline-warning btn-lg btn-block" type="button" disabled={pristine || submitting} onClick={reset}>
          Clear
        </button>
      </div>
    </form>
  )
}

LoginForm = reduxForm({
  form: "loginForm",
  validate,
})(LoginForm);

const selector = formValueSelector("loginForm");


const mapStateToProps = state => {
  const email = selector(state, "email")
  const password = selector(state, "password")
   return {
      email,
      password
   }
}


export default connect(mapStateToProps)(LoginForm)

export { LoginForm }
