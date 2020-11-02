import { useSelector, useDispatch } from 'react-redux';
import Loader from '../../components/Loader';
import {useTranslation} from "react-i18next";
import { useHistory } from 'react-router-dom';
import { getCurrentUser } from '../../actions/authActions';
import PropTypes from 'prop-types';

const UserCourses = () => {
  let history = useHistory();
  const user = getCurrentUser();
  const { courses, loading } = useSelector(state => ({
    courses: state.courseReducer.courses,
    loading: state.courseReducer.loading,
  }));
  const {t, i18n} = useTranslation();
  const id = this.props.match.params.id;
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
        <div>{courses[id]}</div>
        )}
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