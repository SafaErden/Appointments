import {useState} from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/authActions';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import {Formik, Form} from 'formik';
import  FormikField from "../../components/FormikField";
import {formValidationSchema} from "../../validations/formValidations";
import {FaUnlockAlt} from "react-icons/fa";
import {useTranslation} from "react-i18next";
import { NavLink } from 'react-router-dom';

const SignIn = props => {
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const {t, i18n} = useTranslation();

  const handleSubmit = (values) =>{
    setError('');
    setLoading(true);
    dispatch(login(values.username, values.password))
    .then(res => {
      if (res.error) {
        setLoading(false);
        setError(res.error);
      } else {
      }
    })
    .then(() => setLoading(false));
  }
  return (
    <div className="row m-0 p-5 justify-content-around align-items-center theBorder bg-white">
        <Formik onSubmit = {handleSubmit} initialValues={{email: "", username: "", password: "", passwordConfirmation: ""}} validationSchema={formValidationSchema}>
            {({handleChange, errors, touched}) => (
              <Form className="col-12 col-sm-9 col-md-6 col-lg-4">
                <div className="text-center mb-3">
                  {loading && 
                      (<Loader loading />)
                  }
                  {error &&
                      (<Error error={error} />)
                  }
                  <div className="display-1 text-dark pb-3">
                    <FaUnlockAlt />
                  </div>
                </div>
                <FormikField name="username" style="mt-3" type="text" placeholder="Username"  handleChange={handleChange} errors = {errors} touched={touched} />
                <FormikField name="password" style="mt-3" type="password" placeholder="Password" handleChange={handleChange} errors= {errors}  touched={touched}/>
                
                <div className="form-group">
                  <button type="submit" className="btn btn-first btn-block mt-3">
                    {t('auth.signin')}
                  </button>
                </div>
                <p className="divider-text">
                    <span className="bg-white">{t('auth.or')}</span>
                </p>
                <p className="text-center">
                    Don't you have an account?{" "}
                    <NavLink  to={`/signin`} className="font-weight-bold">{t('auth.signup')}</NavLink>{" "}
                </p>
              </Form>
            )
            }
        </Formik>
    </div>
  );
}
SignIn.propTypes = {
  history: PropTypes.string,
};

SignIn.defaultProps = {
  history: '/',
};
export default SignIn;
