import api from './';
import authHeader from './authActions';

export const setCourses = () => async dispatch => {
  try {
    dispatch({ type: 'BEGIN_COURSES' });
    const response = await api.get('/courses', { headers: authHeader() });
    dispatch({
      type: 'SUCCESS_COURSES',
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: 'ERROR_COURSES', payload: error });
  }
};

export const bookCourse = (userId, courseId, timezone) => async dispatch => {
  try {
    dispatch({ type: 'BEGIN_COURSES' });
    const response = await api.get(`/course/${userId}`, { headers: authHeader() });
    dispatch({
      type: 'SUCCESS_COURSES',
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: 'ERROR_COURSES', payload: error });
  }
};



export const getCourses = (userId) => async dispatch => {
  try {
    dispatch({ type: 'BEGIN_COURSES' });
    const response = await api.get(`/course/${userId}`, { headers: authHeader() });
    dispatch({
      type: 'SUCCESS_COURSES',
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: 'ERROR_COURSES', payload: error });
  }
};