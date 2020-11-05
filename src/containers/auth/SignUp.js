import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { FaUserCircle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { NavLink, useHistory } from 'react-router-dom';
import { register, getCurrentUser } from '../../actions/authActions';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import FormikField from '../../components/FormikField';
import formValidationSchema from '../../validations/formValidations';

const SignUp = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();//
  const user = getCurrentUser();
  const handleSubmit = values => {
    setError('');
    setLoading(true);
    dispatch(register(values.username, values.password))
      .then(res => {
        if (res.error) {
          setLoading(false);
          setError(res.error);
        } else {
          window.location.reload();
        }
      })
      .then(() => setLoading(false));
  };
  return (
    <div className="row m-0 p-5 justify-content-around align-items-center theBorder bg-white">
      {user && history.push('/')}
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          email: '', username: '', password: '', passwordConfirmation: '',
        }}
        validationSchema={formValidationSchema}
      >
        {({ handleChange, errors, touched }) => (
          <Form className="col-12 col-sm-9">
            <div className="text-center mb-3">
              {loading
                      && (<Loader loading />)}
              {error
                      && (<Error error={error} />)}
              <div className="display-1 text-dark pb-3">
                <FaUserCircle />
              </div>
              {t('auth.getStarted')}
            </div>
            <FormikField name="username" styles="mt-3" type="text" placeholder={t('auth.username')} handleChange={handleChange} errors={errors} touched={touched} />
            <FormikField name="password" styles="mt-3" type="password" placeholder={t('auth.password')} handleChange={handleChange} errors={errors} touched={touched} />

            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block mt-3">
                {t('auth.signup')}
              </button>
            </div>
            <p className="divider-text">
              <span className="bg-white">{t('auth.or')}</span>
            </p>
            <p className="text-center">
              {t('auth.have?')}
              {' '}
              <NavLink to="/signin" className="font-weight-bold">{t('auth.signin')}</NavLink>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default SignUp;
