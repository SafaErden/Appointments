import api from '.'; // eslint-disable-line import/no-cycle

export const register = (username, password) => dispatch => {
  dispatch({ type: 'AUTH_BEGIN' });
  return api.post('/users', {
    username,
    password,
  })
    .then(response => {
      dispatch({ type: 'SIGNUP_SUCCESS', payload: response.data });
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    });
};

export const login = (username, password) => dispatch => {
  dispatch({ type: 'AUTH_BEGIN' });
  return api.post('/login', {
    username,
    password,
  })
    .then(response => {
      dispatch({ type: 'SIGNIN_SUCCESS', payload: response.data });
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }

      return response.data;
    });
};

export const logout = () => {
  localStorage.removeItem('user');
};

export const getCurrentUser = () => JSON.parse(localStorage.getItem('user'));

export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.token) {
    return { Authorization: `Bearer ${user.token}` };
  }
  return {};
}
