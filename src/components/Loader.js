import React from 'react';
import { ScaleLoader } from 'react-spinners';

const Loader = loading => (
  <>
    {loading && (
    <div className="w-100 text-center p-5">
      <ScaleLoader loading={loading} />
    </div>
    )}
  </>
);
export default Loader;
