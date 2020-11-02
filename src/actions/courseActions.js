import api from './';
import authHeader from './authActions';

export const setWall = () => async dispatch => {
    try {
      dispatch({ type: 'BEGIN_WALL' });
      const response = await api.get('/home', { headers: authHeader(), query: "wall"  });
      dispatch({
        type: 'SUCCESS_WALL',
        payload: response.data,
      });
    } catch (error) {
      dispatch({ type: 'ERROR_WALL', payload: error });
    }
  };

  export const setTrend = () => async dispatch => {
      try {
        dispatch({ type: 'BEGIN_TREND' });
        const response = await api.get('/home', { headers: authHeader(), query: "trend" });
        dispatch({
          type: 'SUCCESS_TREND',
          payload: response.data,
        });
      } catch (error) {
        dispatch({ type: 'ERROR_TREND', payload: error });
      }
    };

    export const setRecent = () => async dispatch => {
        try {
          dispatch({ type: 'BEGIN_RECENT' });
          const response = await api.get('home', { headers: authHeader(), query: "recent"  });
          dispatch({
            type: 'SUCCESS_RECENT',
            payload: response.data,
          });
        } catch (error) {
          dispatch({ type: 'ERROR_RECENT', payload: error });
        }
      };
  