import React from 'react';
import ButtonCreateNote from './buttons/ButtonCreateNote';
import NotesMenu from './notes-menu/NotesMenu';

const Aside = ({
    notes,
    showNote,
    noteActive,
    setCreateMode,
    createMode,
    editMode,
    setErrMsg,
    listRef,
}) => {
    return (
        <aside className="w-1/2 min-w-aside-min-width flex flex-col justify-between h-aside-height border-r border-border-color">
            <NotesMenu
                notes={notes}
                showNote={showNote}
                noteActive={noteActive}
                createMode={createMode}
                editMode={editMode}
                listRef={listRef}
            />
            <ButtonCreateNote
                setCreateMode={setCreateMode}
                editMode={editMode}
                setErrMsg={setErrMsg}
            />
        </aside>
    );
};

export default Aside;
