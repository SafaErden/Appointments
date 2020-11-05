import axios from 'axios';
import authHeader from './authActions';

export default axios.create({
  baseURL: 'https://fathomless-shelf-78681.herokuapp.com/',
  headers: authHeader(),
});
