import * as React from 'react';
import { Button } from '../../types/form';

export default function Input(props: Button) {
    return (
        <span>
            <button
                className={props.className}
                type='submit'
                onClick={props.onClick}
            >
                {props.buttonName}
            </button>
        </span>
    );

}