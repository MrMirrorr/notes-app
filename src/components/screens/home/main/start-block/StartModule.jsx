import React from 'react';
import StartBtnAnimated from '../buttons/StartBtnAnimated';

const StartModule = ({ editMode, setCreateMode, setErrMsg }) => {
    return (
        <main className="w-full p-3 text-center">
            <div className="w-full p-3 mb-2 border-b border-border-color">
                <h2>Hello, my friend!</h2>
                <h3>Welcome to my web application "Notes"</h3>
            </div>
            <div className="w-full p-3">Click the "New note" button to get started.</div>
            <div className="flex flex-col items-center py-10">
                <StartBtnAnimated
                    editMode={editMode}
                    setCreateMode={setCreateMode}
                    setErrMsg={setErrMsg}
                />
            </div>
        </main>
    );
};

export default StartModule;
