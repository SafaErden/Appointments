import {useState} from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { login, getCurrentUser } from '../../actions/authActions';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import {Formik, Form} from 'formik';
import  FormikField from "../../components/FormikField";
import {formValidationSchema} from "../../validations/formValidations";
import {FaUnlockAlt} from "react-icons/fa";
import {useTranslation} from "react-i18next";
import { useHistory, NavLink } from 'react-router-dom';

const SignIn = props => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const {t, i18n} = useTranslation();
  const user = getCurrentUser();

  const handleSubmit = (values) =>{
    setError('');
    setLoading(true);
    dispatch(login(values.username, values.password))
    .then(res => {
      if (res.error) {
        setLoading(false);
        setError(res.error);
      } else {
        window.location.reload();
      }
    })
    .then(() => setLoading(false));
  }
  return (
    <div className="row m-0 p-5 justify-content-around align-items-center theBorder bg-white">
        {user&&history.push("/")}
        <Formik onSubmit = {handleSubmit} initialValues={{email: "", username: "", password: "", passwordConfirmation: ""}} validationSchema={formValidationSchema}>
            {({handleChange, errors, touched}) => (
              <Form className="col-12 col-sm-9">
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
                <FormikField name="username" style="mt-3" type="text" placeholder={t('auth.username')}  handleChange={handleChange} errors = {errors} touched={touched} />
                <FormikField name="password" style="mt-3" type="password" placeholder={t('auth.password')} handleChange={handleChange} errors= {errors}  touched={touched}/>
                
                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block mt-3">
                    {t('auth.signin')}
                  </button>
                </div>
                <p className="divider-text">
                    <span className="bg-white">{t('auth.or')}</span>
                </p>
                <p className="text-center">
                {t('auth.dontHave?')}{" "}
                    <NavLink  to={`/signup`} className="font-weight-bold">{t('auth.signup')}</NavLink>{" "}
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
