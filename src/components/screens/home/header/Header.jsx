import React from 'react';
import ErrMsg from './err-msg/ErrMsg';
import SearchBar from './search-bar/SearchBar';

const Header = ({ notes, editMode, setErrMsg, showNote, errMsg, listRef }) => {
    return (
        <header className="h-header-height border-b border-border-color flex items-center justify-between px-5">
            <SearchBar
                notes={notes}
                editMode={editMode}
                setErrMsg={setErrMsg}
                showNote={showNote}
                listRef={listRef}
            />
            <ErrMsg errMsg={errMsg} />
        </header>
    );
};

export default Header;
