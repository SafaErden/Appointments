const initState = {
  loading: false,
  errors: '',
};

const appointmentReducer = (state = initState, action) => {
  switch (action.type) {
    case 'BEGIN_APPOINTMENT':
      return {
        ...state,
        loading: true,
      };
    case 'SUCCESS_APPOINTMENT':
      return {
        ...state,
        loading: false,
      };
    case 'ERROR_APPOINTMENT':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default appointmentReducer;
