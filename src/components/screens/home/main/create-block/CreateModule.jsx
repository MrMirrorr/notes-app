import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import SaveBtn from '../buttons/SaveBtn';

const CreateModule = ({ createNote, changePropNewNote, newNote }) => {
    return (
        <main className="w-full p-3 pb-6 h-main-height flex flex-col">
            <div className={'flex items-center justify-end mb-3'}>
                <SaveBtn createNote={createNote} />
            </div>
            <input
                type="text"
                className="bg-neutral-800 rounded-lg w-full outline-none p-3 mb-2 caret-blue-500"
                placeholder="Input title"
                value={newNote.title}
                onChange={event => changePropNewNote('title', event)}
            />
            <TextareaAutosize
                className="bg-neutral-800 rounded-lg w-full outline-none p-3 caret-blue-500 overflow-y-auto scrollbar-thin scrollbar-thumb-border-color scrollbar-track-transparent hover:scrollbar-thumb-active-elem-color"
                placeholder="Input text"
                value={newNote.text}
                onChange={event => changePropNewNote('text', event)}
            />
        </main>
    );
};

export default CreateModule;
