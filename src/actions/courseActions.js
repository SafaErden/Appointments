import api from './';
import authHeader from './authActions';

export const setCourses = () => async dispatch => {
    try {
      dispatch({ type: 'BEGIN_COURSES' });
      const response = await api.get('/course', { headers: authHeader() });
      dispatch({
        type: 'SUCCESS_COURSES',
        payload: response.data,
      });
    } catch (error) {
      dispatch({ type: 'ERROR_COURSES', payload: error });
    }
  };