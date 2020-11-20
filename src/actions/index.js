import axios from 'axios';

export function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.token) {
    return { Authorization: `Bearer ${user.token}` };
  }
  return {};
}

export default axios.create({
  baseURL: 'https://fathomless-shelf-78681.herokuapp.com/',
  headers: authHeader(),
});
