import './App.css';
import React from 'react';
import DropFileInput from './components/drop-file-input/DropFileInput';

function App() {

    const onFileChange = (files) => {
        console.log(files);
    }

    return (
        <div className="box">
            <h2 className="header">
                Drop Files
            </h2>
            <DropFileInput
                onFileChange={(files) => onFileChange(files)}
            />
            <h4 className="copywrite">
                <a href="https://tushar-goyal-2712.netlify.app/">Coded by Tushar Goyal</a>
            </h4>
        </div>
    );
}
export default App;