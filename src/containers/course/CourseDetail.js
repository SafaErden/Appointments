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
        <div className="border w-100 d-flex justify-content-center my-4 flex-column rounded shadow-lg">
       {/*<img className="card-img-top" src="..." alt="Card image cap"/>*/}
      <div className="card text-center">
        <div className="card-header">
          <h5 className="card-title">{course.name}</h5>
        </div>
        <div className="card-body">
          
          <p className="card-text">{course.description}</p>
          <Formik onSubmit = {handleSubmit} initialValues={{timezone: "UTC-6", user_id:`${user.user}`, course_id:`${id}`}}>
                    {()=> (
                    <Form>
                      <FormikField as="select" name="timezone" classProp="w-50 mr-auto ml-auto">
                        {options}
                      </FormikField> 
                      
                      <FormikField name="user_id" style="d-none" type="text" /> 
                      <FormikField name="course_id" style="d-none" type="text" />
                      <Link to="/" className="btn btn-dark m-3">{t('goBack')}</Link>
                      <button type="submit" className="btn btn-primary m-3">
                        {t('bookCourse')}
                      </button>
                    </Form>
                  )
                  }
                </Formik>
               
        </div>
        <div className="card-footer text-muted">
          <small><em>macroverse 2020</em></small>
        </div>
      </div>
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