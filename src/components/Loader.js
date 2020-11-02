import {Fragment  } from 'react';
import {  ScaleLoader } from 'react-spinners';

const Loader = (loading) => {
    return (
        <Fragment>
            {loading && (
                <div className="w-100 text-center p-5">
                <ScaleLoader loading={loading}/>
                </div>
            )}
        </Fragment>
    );
}
export default Loader;