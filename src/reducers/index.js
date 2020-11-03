import { combineReducers } from 'redux';
import authReducer from './authReducer';
import appointmentReducer from './appointmentReducer';
import courseReducer from './courseReducer';
import myCourseReducer from './myCourseReducer';

const rootReducer = combineReducers({myCourseReducer, authReducer, appointmentReducer, courseReducer});

export default rootReducer;