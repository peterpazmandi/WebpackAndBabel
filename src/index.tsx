import React from 'react';
import ReactDOM from 'react-dom/client';

const HelloWorld = () => {
    return (
        <h1>
            Hello World
        </h1>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// dont use strict mode
root.render(<HelloWorld />);