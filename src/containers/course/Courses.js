import { useEffect } from 'react';
import { setCourses } from '../../actions/courseActions';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../../components/Loader';
import {useTranslation} from "react-i18next";
import { useHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getCurrentUser } from '../../actions/authActions';

const Courses = () => {
  let history = useHistory();
  const user = getCurrentUser();
  const { courses, loading } = useSelector(state => ({
    courses: state.courseReducer.courses,
    loading: state.courseReducer.loading,
  }));
  console.log(courses);

  const {t, i18n} = useTranslation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCourses());
  }, [dispatch]);
  const content = courses.map(course => (
    <div className="card">
      {/*<img className="card-img-top" src="..." alt="Card image cap"/>*/}
        <div className="card-body">
          <h5 className="card-title">{course.name}</h5>
          <p className="card-text">{`${course.description.slice(0, 200)}...`}</p>
          <Link to={`/courses/${course.id}`} className="btn btn-primary">{t('details')}</Link>

        </div>
      </div>
  ));
 
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
        <div className="card-columns">
          {content}
        </div>)}
    </>
  );
}
Courses.propTypes = {
  history: PropTypes.string,
};

Courses.defaultProps = {
  history: '/',
};

export default Courses;