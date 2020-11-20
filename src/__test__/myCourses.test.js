import myCourseReducer from '../reducers/myCourseReducer';

describe('myCourseReducer reducer', () => {
  it('should return the initial state to objects with loading and errors keys', () => {
    expect(myCourseReducer(undefined, {})).toEqual({ loading: false, errors: null, myCourses: [] });
  });

  it('should handle BEGIN_MY_COURSES', () => {
    expect(
      myCourseReducer([], {
        type: 'BEGIN_MY_COURSES',
      }),
    ).toEqual(
      {
        loading: true,
      },
    );
  });

  it('should handle ERROR_MY_COURSES', () => {
    expect(
      myCourseReducer([], {
        type: 'ERROR_MY_COURSES',
      }),
    ).toEqual(
      {
        errors: undefined,
        loading: false,
      },
    );
  });
});
