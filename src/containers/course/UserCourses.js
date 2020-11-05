import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { getCurrentUser } from '../../actions/authActions';
import Loader from '../../components/Loader';
import { removeCourse, getCourses } from '../../actions/courseActions';

const UserCourses = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const user = getCurrentUser();
  const { t } = useTranslation();//
  const { courses } = useSelector(state => ({
    courses: state.myCourseReducer.myCourses,
  }));

  const handleClick = courseId => {
    setLoading(true);
    dispatch(removeCourse(courseId))
      .then(res => {
        if (res) {
          setLoading(false);
        }
      })
      .then(() => setLoading(false));
  };

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
          <button
            type="button"
            onClick={e => {
              e.preventDefault();
              handleClick(course.id);
            }}
            className="btn btn-primary"
          >
            {t('cancel')}
          </button>

        </div>
        <div className="card-footer text-muted">
          <small><em>{course.course_date}</em></small>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      {!user && history.push('/signin')}
      {loading
          && (<Loader loading />)}
      {!courses.length ? (
        <p className="w-100 text-center p-5">
          {t('noCourse')}
        </p>
      ) : (
        <div className="d-flex flex-column">
          {content}
        </div>
      )}
    </>
  );
};
export default UserCourses;
