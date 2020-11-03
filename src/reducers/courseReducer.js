const initState = {
    courses : [],
    loading : false,
    errors : null,
};

const coursesReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SUCCESS_COURSES':
      return {
        ...state,
        loading: false,
        courses: action.payload.course,
      };
    case 'BEGIN_COURSES':
      return {
        ...state,
        loading: true,
      };
    case 'ERROR_COURSES':
      return {
        ...state,
        loading: false,
        errors: action.errors,
      };
    default:
      return state;
  }
};
export default coursesReducer;