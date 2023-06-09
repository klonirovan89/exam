import React from 'react';
import {PropsType} from "./App";


export const Counter = (props: PropsType) => {


    return (
        <div>
            <p className={props.title == 5 ? "Red" : "Black"}>{props.title}</p>
            <div>
                <button className="Button" onClick={props.addCounter}
                        disabled={props.title == 5 ? true : false}>
                    click
                </button>
                <button className="Button" onClick={props.deleteCounter}
                        disabled={props.title == 0 ? true : false}>
                    reset
                </button>
            </div>
        </div>
    );
};
