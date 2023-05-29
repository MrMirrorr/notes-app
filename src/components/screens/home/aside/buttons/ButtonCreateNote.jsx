import React from 'react';
import { IoMdAdd } from 'react-icons/io';

const ButtonCreateNote = ({ setCreateMode, editMode, setErrMsg }) => {
    return (
        <div className="pt-3 mb-20 px-2 border-t border-border-color">
            <button
                className="flex items-center w-full transition-colors duration-150 ease-in-out hover:bg-active-elem-color px-2 py-1 rounded-md"
                onClick={() =>
                    !editMode ? setCreateMode(true) : setErrMsg('Finish edit note, please!')
                }
            >
                <span>
                    <IoMdAdd size={24} className="text-main-text-color" />
                </span>
                <span className="pl-2">New note</span>
            </button>
        </div>
    );
};

export default ButtonCreateNote;
