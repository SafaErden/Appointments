import { combineReducers } from 'redux';
import authReducer from './authReducer';
import appointmentReducer from './appointmentReducer';
import courseReducer from './courseReducer';

const rootReducer = combineReducers({authReducer, appointmentReducer, courseReducer});

export default rootReducer;