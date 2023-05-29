import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

const DelBtn = ({ setDelId, noteActive }) => {
    return (
        <button
            className="flex items-center border border-border-color rounded-lg ml-2 px-3 py-1 transition-colors ease-in-out duration-300 delay-75  hover:bg-active-elem-color text-red-500"
            onClick={() => setDelId(noteActive.id)}
        >
            <AiOutlineDelete size={24} className="text-main-text-color text-inherit" />
        </button>
    );
};

export default DelBtn;
