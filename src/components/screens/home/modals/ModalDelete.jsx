import React from 'react';

const DeleteModal = ({ setDelId, delId, delNote }) => {
    if (delId !== null) {
        return (
            <div className="bg-neutral-900/75 flex w-full h-full fixed top-0 left-0 z-50 px-5">
                <div className="bg-main-color w-full max-w-md m-auto p-5 rounded-3xl">
                    <div className="text-center mb-5">Delete note?</div>
                    <div className="flex items-center justify-evenly">
                        <button
                            className="border border-border-color rounded-lg px-3 py-1 mr-1 transition-colors ease-in-out duration-300 delay-75  hover:bg-active-elem-color"
                            onClick={() => delNote(delId)}
                        >
                            Yes
                        </button>
                        <button
                            className="border border-border-color rounded-lg px-3 py-1 ml-1 transition-colors ease-in-out duration-300 delay-75  hover:bg-active-elem-color"
                            onClick={() => setDelId(null)}
                        >
                            No
                        </button>
                    </div>
                </div>
            </div>
        );
    }
};

export default DeleteModal;
