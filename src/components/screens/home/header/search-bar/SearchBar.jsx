import React, { useState } from 'react';

const toLowCase = string => string.toLowerCase();

const SearchBar = ({ notes, editMode, setErrMsg, showNote, listRef }) => {
    const [filterValue, setFilterValue] = useState('');

    const showFilterList = () => filterValue.trim() !== '';

    const clickHandlerList = id => {
        if (!editMode) {
            // плавный скроллинг до выбранной заметки
            const children = listRef.current.children;
            for (let child of children) {
                if (child.id === id) {
                    child.scrollIntoView({ behavior: 'smooth' });
                }
            }

            showNote(id);
            setFilterValue('');
        } else {
            setErrMsg('Save the note please!');
        }
    };

    const getFilteredNotes = () => {
        const filteredNotes = notes.filter(note =>
            toLowCase(note.title).includes(toLowCase(filterValue))
        );
        if (showFilterList()) {
            return filteredNotes.map(note => (
                <li
                    className="cursor-pointer p-1 m-1 rounded-lg hover:bg-active-elem-color transition-colors duration-300 ease-in-out select-none"
                    key={note.id}
                    onClick={() => clickHandlerList(note.id)}
                >
                    {note.title}
                </li>
            ));
        }
    };

    return (
        <>
            <input
                type="text"
                placeholder="Quick search"
                className="bg-search-input-color rounded-lg caret-blue-500 outline-none px-3 py-1"
                value={filterValue}
                onChange={e => setFilterValue(e.target.value)}
            />
            <ul className="absolute top-10 z-10 max-w-1/2 pl-1 rounded-lg bg-search-input-color max-h-half-vh overflow-y-auto scrollbar-thin scrollbar-thumb-active-elem-color hover:scrollbar-thumb- scrollbar-thumb-rounded-full">
                {getFilteredNotes()}
            </ul>
        </>
    );
};

export default SearchBar;
