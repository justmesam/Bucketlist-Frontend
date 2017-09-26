import React from "react";
import { connect } from "react-redux";
import TextField from "material-ui/TextField"
import { Field, reduxForm, formValueSelector } from "redux-form";

const validate = values => {
  const errors = {}
  if (!values.old_password) {
    errors.old_password = "Required"
  }
  if (!values.new_password) {
    errors.new_password = "Required"

    if (!values.confirm_password) {
      errors.confirm_password = "Required"
    }
    if (values.new_password !== values.confirm_password) {
      errors.new_password = "The passwords must be same"
      errors.confirm_password = "The passwords must be same"
    }
  return errors
}}


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


let ChangePasswordForm = props => {
  const { handleSubmit, pristine, reset, submitting} = props
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="old_password"
        type="password"
        component={renderTextField}
        label="Old Password"
      />
      <Field name="new_password" type="password" component={renderTextField} label="New Password" />
      <Field name="confirm_password" type="password" component={renderTextField} label="Confirm New Password" />
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

ChangePasswordForm = reduxForm({
  form: "ChangePasswordForm",
  validate,
})(ChangePasswordForm);

const selector = formValueSelector("ChangePasswordForm");


const mapStateToProps = state => {
  const old_password = selector(state, "old_password")
  const new_password = selector(state, "new_password")
  const confirm_password = selector(state, "confirm_password")
   return {
     old_password,
     new_password,
     confirm_password
   }
}


export default connect(mapStateToProps)(ChangePasswordForm)

export { ChangePasswordForm }
