import React from 'react';
import {Button} from "./Button";


export type CounterPropsType = {
    value: number,
    deleteCounter: () => void,
    addCounter: () => void,
    maxValue: number,
    startValue: number
    message: string
}

export const Counter = (props: CounterPropsType) => {

    return (
        <div className="div">
            <div  className="Content">
            <div className={props.message == "Incorrect value!" || (props.message == "" && props.value >= props.maxValue) ? "Red" : "Black"}>{props.message || props.value}</div>
            <div>
                <Button
                    clickHandler={props.addCounter}
                    label={'click'}
                    disabled={props.message != "" || props.value >= props.maxValue}
                />
                <Button
                    clickHandler={props.deleteCounter}
                    label={'reset'}
                    disabled={props.message != "" || props.value <= props.startValue}
                />
            </div>
            </div>
        </div>
    );
};
