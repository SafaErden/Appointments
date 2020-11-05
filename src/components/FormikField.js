import { Field } from 'formik';
import React from 'react';

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

export default FormikField;
