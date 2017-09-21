import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm , formValueSelector} from 'redux-form'
import TextField from 'material-ui/TextField'

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
    fullWidth={true}
    hintText={label}
    multiLine={true}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />


let ItemForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="title" component={renderTextField} label="Title" />
      </div>
      <div>
        <Field name="intro" component={renderTextField} label="Intro" />
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

ItemForm = reduxForm({
  form: 'ItemForm',
  validate,
})(ItemForm)

const selector = formValueSelector('ItemForm');

const mapStateToProps = state => {
  const title = selector(state, 'title')
  const intro = selector(state, 'intro')
   return {
      title,
      intro
   }

}

export default connect(mapStateToProps)(ItemForm)

export { ItemForm }
