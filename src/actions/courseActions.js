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

export const getCourses = () => async dispatch => {
  try {
    dispatch({ type: 'BEGIN_MY_COURSES' });
    const response = await api.get(`/my`, { headers: authHeader() });
    
    dispatch({
      type: 'SUCCESS_MY_COURSES',
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: 'ERROR_MY_COURSES', payload: error });
  }
};

export const bookCourse = (userId, courseId, timezone) => async dispatch => {
  try {
    dispatch({ type: 'BEGIN_APPOINTMENT' });
    const response = await api.post(`/appointments`,  {user_id: userId, course_id: courseId , course_date: timezone} , { headers: authHeader() });
    dispatch({
      type: 'SUCCESS_APPOINTMENT',
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: 'ERROR_APPOINTMENT', payload: error });
  }
};