import React, {ChangeEvent} from 'react';
import {Button} from "./Button";

type SettingsPropsType = {
    setValue: (value: number) => void
    setMaxValue: (value: number) => void
    maxValue: number
    setStartValue: (value: number) => void
    startValue: number
    setMessage: (message: string) => void
    errorShowMessage: (maxValue: number, startValue: number) => void
    message: string
}

export const Settings = (props: SettingsPropsType) => {

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newMaxValue = Number(e.currentTarget.value);
        props.setMaxValue(newMaxValue)
        props.setMessage("Enter values and press 'set'")
        props.errorShowMessage(newMaxValue, props.startValue)
    }

    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newStartValue = Number(e.currentTarget.value)
        props.setStartValue(newStartValue)
        props.setMessage("Enter values and press 'set'")
        props.errorShowMessage(props.maxValue, newStartValue)
    }

    const saveSettings = () => {
        props.setMessage("")
        props.setValue(props.startValue);
        localStorage.setItem('max-value', props.maxValue.toString());
        localStorage.setItem('start-value', props.startValue.toString());
    }

    return (
        <div className="div">
            <div className="Content">
                <div className="Input">
                    <div className="InputContent">
                        <label htmlFor="max-value">max value:</label>
                        <div className="InputBorder">
                            <input className={props.startValue >= props.maxValue || props.maxValue < 0? "InputErrorValue" : "InputValue"}
                                   id="max-value"
                                   type="number"
                                   value={props.maxValue}
                                   onChange={onChangeMaxValueHandler}
                            />
                        </div>
                    </div>
                    <div className="InputContent">
                        <label htmlFor="start-value">start value:</label>
                        <input
                            className={props.startValue < 0 || props.startValue >= props.maxValue ? "InputErrorValue" : "InputValue"}
                            id="start-value"
                            type="number"
                            value={props.startValue}
                            onChange={onChangeStartValueHandler}
                        />
                    </div>
                </div>
                <Button
                    clickHandler={saveSettings}
                    label={'set'}
                    disabled={props.message == "" || props.message == "ERROR"}
                />
            </div>
        </div>
    );
};
