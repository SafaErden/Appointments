import appointmentReducer from '../reducers/appointmentReducer';

describe('appointment reducer', () => {
  it('should return the initial state to objects with loading and errors keys', () => {
    expect(appointmentReducer(undefined, {})).toEqual({ loading: false, errors: '' });
  });

  it('should handle BEGIN_APPOINTMENT', () => {
    expect(
      appointmentReducer([], {
        type: 'BEGIN_APPOINTMENT',
      }),
    ).toEqual(
      {
        loading: true,
      },
    );
  });

  it('should handle SUCCESS_APPOINTMENT', () => {
    expect(
      appointmentReducer([], {
        type: 'SUCCESS_APPOINTMENT',
      }),
    ).toEqual(
      {
        loading: false,
      },
    );
  });
});
