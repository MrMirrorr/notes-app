import React, { useState, useRef } from 'react';
import { nanoid } from 'nanoid';
import Aside from './aside/Aside';
import Header from './header/Header';
import Main from './main/Main';
import ModalDelete from './modals/ModalDelete';

const id = () => nanoid(5);

const notesInit = [];
for (let i = 1; i <= 25; i++) {
    let note = {
        id: id(),
        title: 'title ' + i,
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    };
    notesInit.push(note);
}

const getInitNote = () => {
    return {
        id: id(),
        title: '',
        text: '',
    };
};

const Home = () => {
    const [notes, setNotes] = useState(notesInit);
    const [noteActive, setNoteActive] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [createMode, setCreateMode] = useState(false);
    const [newNote, setNewNote] = useState(getInitNote());
    const [errMsg, setErrMsg] = useState(null);
    const [delId, setDelId] = useState(null);
    const listRef = useRef(null);

    // показывает заметку
    const showNote = id => {
        const findElem = notes.find(note => note.id === id);
        if (!editMode) {
            setNoteActive(findElem);
            setCreateMode(false);
            setErrMsg(null);
        } else {
            setErrMsg('Save the note please!');
        }
    };

    // проверка названий заметок на дубликаты при создании/редактировании
    const includesTitle = (title, id = undefined) => {
        // условие поиска дублей при создании новой заметки
        if (notes.filter(note => note.title === title).length !== 0 && id === undefined) {
            return true;

            // условие поиска дублей при редактировании заметки
        } else if (notes.filter(note => note.title === title).length !== 1 && id !== undefined) {
            return true;

            // если дубли не обнаружены - ок
        } else {
            return false;
        }
    };

    // Создание заметки
    // изменяем свойства новой записи перед созданием
    const changePropNewNote = (prop, event) => {
        setNewNote({ ...newNote, [prop]: event.target.value });
    };

    // добавляем новую заметку в главный стейт с массивом
    const createNote = id => {
        // проверяем наличие какого-либо текста
        if (newNote.title.trim() !== '' && newNote.text.trim() !== '') {
            // дополнительно проверяем на дубли по названию заметки
            if (includesTitle(newNote.title)) {
                setErrMsg('This title is already exists!');
            } else {
                // и если все окей - добавляем заметку в главный стейт
                setNotes([...notes, newNote]);
                // делаем ее активной
                setNoteActive(newNote);
                // очищаем свойства объекта, инициализирующего новую заметку
                setNewNote(getInitNote());
                // выключаем режим создания новой заметки
                setCreateMode(false);
                // очищаем поле ошибок
                setErrMsg(null);
            }
        } else {
            setErrMsg('Please enter text!');
        }
    };

    // Редактирование заметки
    // включаем режим редактирования
    const startEdit = () => {
        setEditMode(true);
    };

    // получаем свойства редактируемой заметки для показа в инпутах
    const getValue = (id, prop) => {
        return notes.reduce((res, note) => (note.id === id ? note[prop] : res), '');
    };

    // изменяем свойства редактируемой заметки при редактировании текста в инпутах
    const changePropCurrentNote = (id, prop, event) => {
        setNotes(
            notes.map(note => {
                if (note.id === id) {
                    return { ...note, [prop]: event.target.value };
                } else {
                    return note;
                }
            })
        );
    };

    // завершаем редактирование
    const finishEdit = id => {
        // получаем отредактированный элемент из главного стейта с массивом
        const findElem = notes.find(note => note.id === id);
        // проверяем наличие какого-либо текста
        if (findElem.title.trim() !== '' && findElem.text.trim() !== '') {
            // дополнительно проверяем на дубли по названию заметки
            if (includesTitle(findElem.title, id)) {
                setErrMsg('This title is already exists!');
            } else {
                // и если все окей отключаем режим редактирования
                setEditMode(false);
                // делаем отредактированную заметку активной
                setNoteActive(findElem);
                // очищаем поле ошибок
                setErrMsg(null);
            }
        } else {
            setErrMsg('Please enter text!');
        }
    };

    // Удаление заметки
    const delNote = id => {
        // удаляем выбранную заметку по id
        setNotes(notes.filter(note => note.id !== id));

        // получаем индекс в массиве удаленной заметки для переключения активной заметки на соседнюю
        const indexDelNote = notes.findIndex(note => note.id === id);
        setDelId(null);
        // переключаем активную заметку относительно удаляемой на предыдущую
        // если удаленная заметка была первой в массиве, то перекидываем активность на следующую заметку
        setNoteActive(indexDelNote !== 0 ? notes[indexDelNote - 1] : notes[indexDelNote + 1]);
    };

    return (
        <div className="text-main-text-color h-full">
            <Header
                notes={notes}
                setNotes={setNotes}
                setNoteActive={setNoteActive}
                editMode={editMode}
                setErrMsg={setErrMsg}
                errMsg={errMsg}
                showNote={showNote}
                listRef={listRef}
            />
            <div className="flex">
                <Aside
                    notes={notes}
                    showNote={showNote}
                    noteActive={noteActive}
                    setCreateMode={setCreateMode}
                    createMode={createMode}
                    editMode={editMode}
                    setErrMsg={setErrMsg}
                    listRef={listRef}
                />
                <Main
                    notes={notes}
                    noteActive={noteActive}
                    editMode={editMode}
                    createMode={createMode}
                    changePropNewNote={changePropNewNote}
                    newNote={newNote}
                    createNote={createNote}
                    startEdit={startEdit}
                    changePropCurrentNote={changePropCurrentNote}
                    getValue={getValue}
                    finishEdit={finishEdit}
                    errMsg={errMsg}
                    setDelId={setDelId}
                    setCreateMode={setCreateMode}
                    setErrMsg={setErrMsg}
                />
            </div>
            <ModalDelete setDelId={setDelId} delId={delId} delNote={delNote} />
        </div>
    );
};

export default Home;
