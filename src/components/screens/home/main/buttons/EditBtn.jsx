import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai';

const EditBtn = ({ startEdit, noteActive }) => {
    return (
        <button
            className="flex items-center border border-border-color rounded-lg px-3 py-1 transition-colors ease-in-out duration-300 delay-75  hover:bg-active-elem-color"
            onClick={() => startEdit(noteActive.id)}
        >
            <span>
                <AiOutlineEdit size={24} className="text-main-text-color pr-2" />
            </span>
            <span>Edit note</span>
        </button>
    );
};

export default EditBtn;
