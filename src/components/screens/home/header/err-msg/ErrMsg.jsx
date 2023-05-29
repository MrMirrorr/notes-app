import React from 'react';

const ErrMsg = ({ errMsg }) => {
    return errMsg !== null && <div className="bg-red-500">{errMsg}</div>;
};

export default ErrMsg;
