import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useHistory, Link } from 'react-router-dom';
import Loader from '../../components/Loader';
import { setCourses } from '../../actions/courseActions';
import { getCurrentUser } from '../../actions/authActions';

const Courses = () => {
  const history = useHistory();
  const user = getCurrentUser();
  const { courses, loading } = useSelector(state => ({
    courses: state.courseReducer.courses,
    loading: state.courseReducer.loading,
  }));

  const { t } = useTranslation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCourses());
  }, [dispatch]);
  const bg = [
    'primary',
    'danger',
    'success',
    'warning',
    'success',
    'info',
    'danger',
  ];
  const content = courses.map((course, index) => (

    <div key={Math.random()} className={`col-12 col-md-4 col-lg-3 m-0 bg-${bg[index]} transparent`}>
      <Link to={`/courses/${course.id}`}>
        {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
        <div className="card-body text-white">
          <h5 className="card-title">{course.name}</h5>
          <p className="card-text">{`${course.description.slice(0, 150)}...`}</p>
        </div>
      </Link>
    </div>
  ));

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
        <div className="row">
          {content}
        </div>
      )}
    </>
  );
};
export default Courses;
