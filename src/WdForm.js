import React from 'react';
import { Field, reduxForm } from 'redux-form';
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField';
import { RadioButton } from 'material-ui/RadioButton';
import { DatePicker, RadioButtonGroup, SelectField } from 'redux-form-material-ui';

const CanvasForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
    <TextField hintText={label}
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      {...custom}
    />
  );
  return (
    <div className="wd-survey-wrapper">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <span className="wd-sentence-wrapper">
            My name is
            <span className="wd-field-wrapper">
              <Field name="fullName" component={renderTextField} label="Your full name" />
            </span>
          </span>
          <span>
          <span className="wd-sentence-wrapper">
            I was born on
              <span className="wd-field-wrapper">
                <Field name="birthDate" component={DatePicker} format={null} formatDate={(date) => date.toLocaleDateString('en-US')} hintText="When was your birthdate?"/>
              </span>
            </span>
          </span>
        </div>
        <div className="row">
          <span className="wd-sentence-wrapper">
            <span className="wd-word-wrapper">I am a</span>
            <div className="wd-field-wrapper">
              <Field name="occupation" component={SelectField} hintText="What is your occupation?">
                <MenuItem value="Student" primaryText="Student"/>
                <MenuItem value="Professor" primaryText="Professor"/>
                <MenuItem value="Lawyer" primaryText="Lawyer"/>
                <MenuItem value="Engineer" primaryText="Engineer"/>
                <MenuItem value="Artist" primaryText="Artist"/>
              </Field>
            </div>
          </span>
        </div>
        <div className="row">

          I usually vote for
          <span className="wd-field-wrapper">
            <Field name="bestFramework" component={RadioButtonGroup}>
              <RadioButton value="democrat" label="Democrat"/>
              <RadioButton value="republican" label="Republican"/>
              <RadioButton value="independent" label="Independent"/>
              <RadioButton value="no answer" label="Prefer not to state"/>
            </Field>
          </span>
        </div>
        <div>
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
        </div>
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'canvas' // a unique identifier for this form
})(CanvasForm)