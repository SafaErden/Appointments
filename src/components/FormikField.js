import { Field } from 'formik';
import React from 'react';
import PropTypes from 'prop-types';

const FormikField = ({
  classProp = '', styles = '', as = '', name = '', errors = '', touched = '', type = '', ...props
}) => {
  const className = errors[name] && touched[name] ? 'border rounded border-danger' : '';
  return (
    <>
      <div className={`form-group input-group m-0 ${className} ${styles} ${classProp}`}>
        <Field
          {...props}// eslint-disable-line react/jsx-props-no-spreading
          name={name}
          className="form-control"
          type={type}
          as={as}
        />
      </div>
      {errors[name] && touched[name] && <small className="text-danger m-0 p-0 "><em>{errors[name]}</em></small>}
    </>
  );
};

FormikField.propTypes = {
  classProp: PropTypes.string,
  styles: PropTypes.string,
  as: PropTypes.string,
  name: PropTypes.string,
  errors: PropTypes.string,
  touched: PropTypes.bool,
  type: PropTypes.string,
};

FormikField.defaultProps = {
  classProp: '',
  styles: '',
  as: '',
  name: '',
  errors: '',
  touched: false,
  type: '',
};

export default FormikField;
