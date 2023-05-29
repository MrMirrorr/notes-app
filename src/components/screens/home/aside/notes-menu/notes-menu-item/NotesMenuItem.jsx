import React from 'react';
import cn from 'classnames';

const NotesMenuItem = ({ id, note, showNote, noteActive, createMode }) => {
    const activeId = noteActive.id;
    const isActive = id => id === activeId;

    return (
        <li
            id={id}
            className={cn(
                'whitespace-pre-wrap overflow-hidden truncate cursor-pointer p-2 my-2 transition-colors duration-300 ease-in-out hover:bg-active-elem-color rounded-lg select-none snap-start',
                {
                    'text-blue-500 bg-active-elem-color': isActive(id) && !createMode,
                }
            )}
            onClick={() => showNote(note.id)}
        >
            {note.title}
        </li>
    );
};

export default NotesMenuItem;
