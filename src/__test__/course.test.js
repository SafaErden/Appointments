import courseReducer from '../reducers/courseReducer';

describe('courseReducer reducer', () => {
  it('should return the initial state to objects with loading and errors keys', () => {
    expect(courseReducer(undefined, {})).toEqual({ loading: false, errors: null, courses: [] });
  });

  it('should handle BEGIN_COURSES', () => {
    expect(
      courseReducer([], {
        type: 'BEGIN_COURSES',
      }),
    ).toEqual(
      {
        loading: true,
      },
    );
  });

  it('should handle ERROR_COURSES', () => {
    expect(
      courseReducer([], {
        type: 'ERROR_COURSES',
      }),
    ).toEqual(
      {
        errors: undefined,
        loading: false,
      },
    );
  });
});
