import React from 'react';
import { MdSaveAs } from 'react-icons/md';

const SaveBtn = ({ createNote, noteActive, editMode, finishEdit }) => {
    return (
        <button
            className="flex items-center border border-border-color rounded-lg px-3 py-1 transition-colors ease-in-out duration-300 delay-75  hover:bg-active-elem-color"
            onClick={() => (editMode ? finishEdit(noteActive.id) : createNote())}
        >
            <span className='size={24} className="text-main-text-color pr-2'>
                <MdSaveAs />
            </span>
            <span>Save note</span>
        </button>
    );
};

export default SaveBtn;
