import React from 'react';
import StartModule from './start-block/StartModule';
import EditModule from './edit-block/EditModule';
import CreateModule from './create-block/CreateModule';
import ShowModule from './show-block/ShowMode';

const Main = ({
    notes,
    noteActive,
    editMode,
    createMode,
    changePropNewNote,
    newNote,
    createNote,
    startEdit,
    changePropCurrentNote,
    getValue,
    finishEdit,
    setDelId,
    setCreateMode,
    setErrMsg,
}) => {
    if ((notes.length === 0 && !createMode) || (noteActive === '' && !createMode)) {
        // если заметок нет совсем
        return (
            <StartModule editMode={editMode} setCreateMode={setCreateMode} setErrMsg={setErrMsg} />
        );
    } else if (editMode && !createMode) {
        // если включен режим редактирования
        return (
            <EditModule
                finishEdit={finishEdit}
                getValue={getValue}
                changePropCurrentNote={changePropCurrentNote}
                noteActive={noteActive}
                editMode={editMode}
            />
        );
    } else if (createMode && !editMode) {
        // если включен режим создания
        return (
            <CreateModule
                createNote={createNote}
                changePropNewNote={changePropNewNote}
                newNote={newNote}
            />
        );
    } else {
        // режим показа (если выключены все режимы, просто показываем заметки)
        return <ShowModule startEdit={startEdit} noteActive={noteActive} setDelId={setDelId} />;
    }
};

export default Main;
