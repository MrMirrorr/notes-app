import React from 'react';
import { IoMdAdd } from 'react-icons/io';

const CreateBtnAnimated = ({ editMode, setCreateMode, setErrMsg }) => {
    return (
        <button
            className="flex items-center transition-colors duration-300 ease-in-out hover:bg-active-elem-color px-2 py-1 rounded-md border border-blue-500 animate-pulse"
            onClick={() =>
                !editMode ? setCreateMode(true) : setErrMsg('Finish edit note, please!')
            }
        >
            <span>
                <IoMdAdd size={24} className="text-blue-500" />
            </span>
            <span className="pl-2 text-blue-500">New note</span>
        </button>
    );
};

export default CreateBtnAnimated;
