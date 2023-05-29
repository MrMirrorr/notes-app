import React from 'react';
import NotesMenuItem from './notes-menu-item/NotesMenuItem';

const NotesMenu = ({ notes, showNote, noteActive, createMode, listRef }) => {
    return (
        <ul
            ref={listRef}
            className="my-4 px-3 overflow-y-auto scrollbar-thin scrollbar-thumb-border-color hover:scrollbar-thumb-active-elem-color scrollbar-thumb-rounded-full snap-y"
        >
            {notes.map(note => (
                <NotesMenuItem
                    key={note.id}
                    notes={notes}
                    id={note.id}
                    note={note}
                    showNote={showNote}
                    noteActive={noteActive}
                    createMode={createMode}
                />
            ))}
        </ul>
    );
};

export default NotesMenu;
