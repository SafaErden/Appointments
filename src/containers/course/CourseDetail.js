import { useState } from 'react';
import { bookCourse } from '../../actions/courseActions';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../../components/Loader';
import {useTranslation} from "react-i18next";
import { useHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {Formik, Form} from 'formik';
import  FormikField from "../../components/FormikField";
import { getCurrentUser } from '../../actions/authActions';
import {BsCaretLeft} from 'react-icons/bs';

const CourseDetail = ({match}) => {
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  let history = useHistory();
  const user = getCurrentUser();
  const {t, i18n} = useTranslation();
  const { id } = match.params;
  const timezones = {
    utc1: "UTC+1",
    utc6: "UTC-6"
  }

  const handleSubmit = (values) =>{
    setError('');
    setLoading(true);
    dispatch(bookCourse(values.user_id,values.course_id,values.timezone))
    .then(res => {
      if (res) {
        setLoading(false);
        setError(res);
      } else {
        history.push("/myCourses");
      }
    })
    .then(() => setLoading(false));
  }
  
  const options = Object.keys(timezones).map(function(key,index) {
    return (<option value={timezones[key]} key={index}>{timezones[key]}</option>);
  });

  const { courses } = useSelector(state => ({
    courses: state.courseReducer.courses
  }));

  let course = courses.filter(course => course.id == id);
  course= course[0];
  return (
      <>
        {!user&&history.push("/signin")}
        {loading &&
          (<Loader loading />)
        }
        {!courses.length && !loading ? (
        <p className="w-100 text-center p-5">
          {t('noCourse')}
        </p>
      ) : (
      <div className="row position-relative w-100 h-100">
        <div className="col-9 bg-white transparent  d-flex flex-column align-items-left justify-content-center">
          <p className="card-text h5">{course.description}</p>
          <small><em>macroverse 2020</em></small>
        </div>
        <div className="col-3">
          <h3 className="card-title text-white mb-5">{course.name}</h3>
          <Formik onSubmit = {handleSubmit} initialValues={{timezone: "UTC-6", user_id:`${user.user}`, course_id:`${id}`}}>
            {()=> (
            <Form>
              <FormikField as="select" name="timezone" classProp="w-100">
                {options}
              </FormikField> 
              
              <FormikField name="user_id" style="d-none" type="text" /> 
              <FormikField name="course_id" style="d-none" type="text" />
              
              <button type="submit" className="btn btn-success w-100 mt-3">
                {t('bookCourse')}
              </button>
            </Form>
          )
          }
        </Formik>
        </div>
        <Link to="/" className="btn-circle btn-lg m-3 absolute-btn bg-success text-white"><BsCaretLeft /></Link>
      </div>
        )}
    </>
  );
}

CourseDetail.propTypes = {
  history: PropTypes.string,
};

CourseDetail.defaultProps = {
  history: '/',
};

export default CourseDetail;