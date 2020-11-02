import { combineReducers } from 'redux';
import authReducer from './authReducer';
import appointmentReducer from './appointmentReducer';

const rootReducer = combineReducers({authReducer, appointmentReducer});

export default rootReducer;