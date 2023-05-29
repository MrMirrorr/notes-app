import React from 'react';
import DelBtn from '../buttons/DelBtn';
import EditBtn from '../buttons/EditBtn';

const ShowMode = ({ startEdit, noteActive, setDelId }) => {
    return (
        <main className="w-full p-3 pb-6 h-main-height flex flex-col">
            <div className="flex items-center justify-end mb-3">
                <EditBtn startEdit={startEdit} noteActive={noteActive} />
                <DelBtn setDelId={setDelId} noteActive={noteActive} />
            </div>
            <div className="w-full p-3 mb-2 border-b border-border-color whitespace-pre-wrap break-word">
                <h2>{noteActive.title}</h2>
            </div>
            <div className="w-full p-3 whitespace-pre-wrap break-word overflow-y-auto scrollbar-thin scrollbar-thumb-border-color scrollbar-track-transparent hover:scrollbar-thumb-active-elem-color">
                {noteActive.text}
            </div>
        </main>
    );
};

export default ShowMode;
