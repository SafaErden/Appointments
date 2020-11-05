const initState = {
  myCourses: [],
  loading: false,
  errors: null,
};

const myCoursesReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SUCCESS_MY_COURSES':
      return {
        ...state,
        loading: false,
        myCourses: action.payload.course,
      };
    case 'BEGIN_MY_COURSES':
      return {
        ...state,
        loading: true,
      };
    case 'ERROR_MY_COURSES':
      return {
        ...state,
        loading: false,
        errors: action.errors,
      };
    default:
      return state;
  }
};
export default myCoursesReducer;
