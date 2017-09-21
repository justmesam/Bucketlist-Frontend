import React from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import { Field, reduxForm} from 'redux-form';


const validate = values => {
  const errors = {}
  const requiredFields = [
    'title',
    'intro',
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
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
    hintText={label}
    multiLine={true}
    fullWidth={true}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />


let BucketlistEditForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit} >
      <div>
        <Field name="title" component={renderTextField} label="Title" />
      </div>
      <div>
        <Field name="intro" component={renderTextField} label="intro" />
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear
        </button>
      </div>
    </form>
  )
}

BucketlistEditForm = reduxForm({
  form: 'BucketlistEditForm',
  validate
})(BucketlistEditForm)

BucketlistEditForm = connect(state => ({
    initialValues : state.bucketlists.singleBucketlist
}))(BucketlistEditForm)

export default BucketlistEditForm;
