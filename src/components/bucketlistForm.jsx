import React from "react"
import { connect } from "react-redux"
import TextField from "material-ui/TextField"
import { Field, reduxForm, formValueSelector } from "redux-form";


const validate = values => {
  const errors = {}
  const requiredFields = [
    "title",
    "intro",
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "Required"
    }
  })
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
    multiLine={true}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />


let BucketlistForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="title" component={renderTextField} label="Title" />
      </div>
      <div>
        <Field name="intro" component={renderTextField} label="Intro" />
      </div>
      <div >
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

BucketlistForm = reduxForm({
  form: "BucketlistForm",
  validate
})(BucketlistForm)

const selector = formValueSelector("BucketlistForm");


const mapStateToProps = state => {
  const title = selector(state, "title")
  const intro = selector(state, "intro")
   return {
      title,
      intro
   }

}

export default connect(mapStateToProps)(BucketlistForm)

export { BucketlistForm }
