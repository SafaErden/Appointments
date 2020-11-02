import axios from 'axios';
import authHeader from './authActions';

export default axios.create({
  baseURL: 'http://localhost:3001/',
  headers:  authHeader()
});
