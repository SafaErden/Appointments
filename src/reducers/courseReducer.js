const initState = {
    courses : [],
    loading : false,
    errors : ""
}

const coursesReducer = (state = initState, action) => {
  switch (action.type) {
    case 'COURSES_SUCCESS':
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
      };
    case 'COURSES_BEGIN':
      return {
        ...state,
        loading: true,
      };
    case 'COURSES_ERROR':
      return {
        ...state,
        loading: false,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
export default coursesReducer;