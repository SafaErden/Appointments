const user = JSON.parse(localStorage.getItem('user'));

const initState = user ? { isLoggedIn: true, user } : { isLoggedIn: false, user: null };

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        user: action.payload.user,
      };
    case 'SIGNIN_SUCCESS':
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        user: action.payload.user,
      };
    case 'AUTH_BEGIN':
      return {
        ...state,
        loading: true,
      };
    case 'AUTH_ERROR':
      return {
        ...state,
        loading: false,
        isLoggedIn: false,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
