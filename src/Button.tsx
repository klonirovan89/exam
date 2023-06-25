import React from 'react';

type ButtonPropsType = {
    disabled: boolean
    label: string
    clickHandler: () => void
}

export const Button = (props: ButtonPropsType) => {


    return (
        <button className="Button" disabled={props.disabled} onClick={props.clickHandler}>
            {props.label}
        </button>
    );
};
