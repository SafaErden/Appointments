import { removeCourse,getCourses } from '../../actions/courseActions';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../../components/Loader';
import {useTranslation} from "react-i18next";
import { useHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getCurrentUser } from '../../actions/authActions';
import { useState, useEffect } from 'react';

const UserCourses = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  let history = useHistory();
  const user = getCurrentUser();
  const {t, i18n} = useTranslation();
  const { courses } = useSelector(state => ({
    courses: state.myCourseReducer.myCourses
  }));

  const handleClick = (course_id) =>{
    setError('');
    setLoading(true);
    dispatch(removeCourse(course_id))
    .then(res => {
      if (res) {
        setLoading(false);
        setError(res);
      }
    })
    .then(() => setLoading(false));
  }

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);
  const content = courses.map(course => (
    <div key={Math.random()} className="w-100 d-flex justify-content-center my-4 flex-column shadow-lg">
    <div className="card">
        <div className="card-header">
          <h5 className="card-title">{course.name}</h5>
        </div>
        <div className="card-body">
          <p className="card-text">{course.description}</p>
          <a onClick={(e) => {
                    e.preventDefault();
                    handleClick(course.id);
                  }} className="btn btn-primary">{t('cancel')}</a>

        </div>
        <div className="card-footer text-muted">
          <small><em>{course.course_date}</em></small>
        </div>
      </div>
    </div>
  ));
 
  return (
      <>
        {!user&&history.push("/signin")}
        {loading &&
          (<Loader loading />)
        }
        {!courses.length ? (
        <p className="w-100 text-center p-5">
          {t('noCourse')}
        </p>
      ) : (
        <>
          {content}
        </>)}
    </>
  );
}
UserCourses.propTypes = {
  history: PropTypes.string,
};

UserCourses.defaultProps = {
  history: '/',
};

export default UserCourses;