import React from 'react';

const Error = error => (
  <>
    {error && (
    <p className="w-100 text-center theBorder text-white p-3 my-2 rounded bg-dark">
      {`${error.error} !`}
    </p>
    )}
  </>
);
export default Error;
