import React, {useState} from 'react'
import './App.css'
import {Counter} from "./Counter";
import {Settings} from './Settings';

function App() {

    const initialMaxValue = localStorage.getItem('max-value')
        ? Number(localStorage.getItem('max-value'))
        : 5;
    const initialStartValue = localStorage.getItem('start-value')
        ? Number(localStorage.getItem('start-value'))
        : 0;

    const [maxValue, setMaxValue] = useState<number>(initialMaxValue);
    const [startValue, setStartValue] = useState<number>(initialStartValue);
    const [value, setValue] = useState<number>(startValue);
    const [message, setMessage] = useState<string>('')

    const errorShowMessage = (maxValue: number, startValue: number) => {
        if (maxValue <= startValue || startValue < 0) {
            setMessage("ERROR")
        }
    }

    const deleteCounter = () => {
        setValue(startValue);
    }

    const addCounter = () => {
        if (value < maxValue) setValue(value + 1)
    }

    return (
        <div className="App">
            <Settings
                setValue={setValue}
                setMaxValue={setMaxValue}
                maxValue={maxValue}
                setStartValue={setStartValue}
                startValue={startValue}
                setMessage={setMessage}
                errorShowMessage={errorShowMessage}
                message={message}
            />
            <Counter
                value={value}
                deleteCounter={deleteCounter}
                addCounter={addCounter}
                maxValue={maxValue}
                startValue={startValue}
                message={message}
            />
        </div>
    )
}

export default App;