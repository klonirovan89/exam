import React, {useState} from 'react'
import './App.css'
import {Counter} from "./Counter";

export type PropsType = {
    title: number,
    deleteCounter: () => void,
    addCounter: () => void
}

function App() {

    const [title, setTitle] = useState(0);
    let [activeClick, setActiveClick] = useState(false);

    const deleteCounter = () => {
        setTitle(0);
    }

    function addCounter() {
        title < 5 ? setTitle(title + 1) : setActiveClick(true);
    }

    return (
        <div className="App">
            <Counter
                title={title}
                deleteCounter={deleteCounter}
                addCounter={addCounter}
            />
        </div>
    )
}

export default App;