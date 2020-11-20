import authReducer from '../reducers/authReducer';

describe('authentication reducer', () => {
  it('should return the initial state to objects with loading and errors keys', () => {
    expect(authReducer(undefined, {})).toEqual({ isLoggedIn: false, user: null });
  });

  it('should handle AUTH_BEGIN', () => {
    expect(
      authReducer([], {
        type: 'AUTH_BEGIN',
      }),
    ).toEqual(
      {
        loading: true,
      },
    );
  });

  it('should handle AUTH_ERROR', () => {
    expect(
      authReducer([], {
        type: 'AUTH_ERROR',
      }),
    ).toEqual(
      {
        loading: false,
        isLoggedIn: false,
      },
    );
  });

  it('should handle LOGOUT', () => {
    expect(
      authReducer([], {
        type: 'LOGOUT',
      }),
    ).toEqual(
      {
        isLoggedIn: false,
        user: null,
      },
    );
  });
});
