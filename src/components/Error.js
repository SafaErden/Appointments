import {Fragment } from 'react';

const Error = (error) => {
    return (
        <Fragment>
            {error && (
                <p className="w-100 text-center theBorder text-white p-3 my-2 rounded bg-dark">
                {`${error["error"]} !`}
                </p>
            )}
        </Fragment>
    );
}
export default Error;