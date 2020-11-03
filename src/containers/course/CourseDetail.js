import { useEffect } from 'react';
import { setCourses } from '../../actions/courseActions';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../../components/Loader';
import {useTranslation} from "react-i18next";
import { useHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getCurrentUser } from '../../actions/authActions';

const CourseDetail = ({match}) => {
  let history = useHistory();
  const user = getCurrentUser();
  const { courses, loading } = useSelector(state => ({
    courses: state.courseReducer.courses,
    loading: state.courseReducer.loading,
  }));

  const {t, i18n} = useTranslation();
  const dispatch = useDispatch();
  const { id } = match.params;
  useEffect(() => {
    dispatch(setCourses());
  }, [dispatch]);
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
          <Link to="/" className="btn btn-dark">{t('goBack')}</Link>
                <Link to={`/courses/${course.id}`} className="btn btn-primary ml-2">{t('bookCourse')}</Link>
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