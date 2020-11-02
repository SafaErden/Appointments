import { useEffect } from 'react';
import { setCourses } from '../../actions/courseActions';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../../components/Loader';
import {useTranslation} from "react-i18next";

const Courses = () => {
  const { courses, loading } = useSelector(state => ({
    courses: state.courseReducer.courses,
    loading: state.courseReducer.loading,
  }));
  const {t, i18n} = useTranslation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCourses());
  }, [dispatch]);

 
  return (
      <>
        {loading &&
          (<Loader loading />)
        }
        {!courses.length && !loading ? (
        <p className="w-100 text-center p-5">
          {t('noCourse')}
        </p>
      ) : (
        <div>
            {courses.map(c => 
              <div>{c.content}</div> 
            )}
        </div>)}
    </>
  );
}

export default Courses;