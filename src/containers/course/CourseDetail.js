import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useHistory, Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { BsCaretLeft } from 'react-icons/bs';
import PropTypes from 'prop-types';
import FormikField from '../../components/FormikField';
import { getCurrentUser } from '../../actions/authActions';
import Loader from '../../components/Loader';
import { bookCourse } from '../../actions/courseActions';

const CourseDetail = ({ match }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const user = getCurrentUser();
  const { t } = useTranslation();
  const { id } = match.params;
  const timezones = {
    utc1: 'UTC+1',
    utc6: 'UTC-6',
  };

  const handleSubmit = values => {
    setLoading(true);
    dispatch(bookCourse(values.user_id, values.course_id, values.timezone))
      .then(res => {
        if (res) {
          setLoading(false);
        } else {
          history.push('/myCourses');
        }
      });
  };

  const options = Object.keys(timezones).map(key => (<option value={timezones[key]} key={Math.random()}>{timezones[key]}</option>));// eslint-disable-line max-len
  const { courses } = useSelector(state => ({
    courses: state.courseReducer.courses,
  }));

  let course = courses.filter(course => course.id == id);// eslint-disable-line eqeqeq
  course = course[0];// eslint-disable-line prefer-destructuring
  return (
    <>
      {!user && history.push('/signin')}
      {loading
          && (<Loader loading />)}
      {!courses.length && !loading ? (
        <p className="w-100 text-center p-5">
          {t('noCourse')}
        </p>
      ) : (
        <div className="row position-relative w-100 h-100">
          <div className="col-12 col-md-9 bg-white transparent  d-flex flex-column align-items-left justify-content-center">
            <p className="card-text h5">{course.description}</p>
            <small><em>macroverse 2020</em></small>
          </div>
          <article className="col-12 col-md-3">
            <h1 className="card-title text-white mb-5 h3">{course.name}</h1>
            <Formik onSubmit={handleSubmit} initialValues={{ timezone: 'UTC-6', user_id: `${user.user}`, course_id: `${id}` }}>
              {() => (
                <Form>
                  <FormikField as="select" name="timezone" classProp="w-100">
                    {options}
                  </FormikField>

                  <FormikField name="user_id" styles="d-none" type="text" />
                  <FormikField name="course_id" styles="d-none" type="text" />

                  <button type="submit" className="btn btn-success w-100 mt-3">
                    {t('bookCourse')}
                  </button>
                </Form>
              )}
            </Formik>
          </article>
          <Link to="/" className="btn-circle btn-lg m-3 absolute-btn bg-success text-white"><BsCaretLeft /></Link>
        </div>
      )}
    </>
  );
};

CourseDetail.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
};

export default CourseDetail;
