import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import SaveBtn from '../buttons/SaveBtn';

const EditModule = ({ noteActive, editMode, finishEdit, getValue, changePropCurrentNote }) => {
    return (
        <main className="w-full p-3 pb-6 h-main-height flex flex-col">
            <div className={'flex items-center justify-end mb-3'}>
                <SaveBtn finishEdit={finishEdit} editMode={editMode} noteActive={noteActive} />
            </div>
            <input
                type="text"
                className="bg-neutral-800 rounded-lg w-full outline-none p-3 mb-2 caret-blue-500"
                value={getValue(noteActive.id, 'title')}
                onChange={event => changePropCurrentNote(noteActive.id, 'title', event)}
            />
            <TextareaAutosize
                className="bg-neutral-800 rounded-lg w-full outline-none p-3 caret-blue-500 overflow-y-auto scrollbar-thin scrollbar-thumb-border-color scrollbar-track-transparent hover:scrollbar-thumb-active-elem-color"
                value={getValue(noteActive.id, 'text')}
                onChange={event => changePropCurrentNote(noteActive.id, 'text', event)}
            />
        </main>
    );
};

export default EditModule;
