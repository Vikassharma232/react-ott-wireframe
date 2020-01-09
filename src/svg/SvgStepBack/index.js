import React from 'react';
import './style.scss';

export default function SvgStepBack(props) {
    return (
        <svg 
            className="svg-step-back" 
            width={props.size ? props.size : '2rem'} 
            height={props.size ? props.size : '2rem'} 
            viewBox="0 0 22.857 32"
        >
            <path
                d="M.001 31.142V.858A.86.86 0 01.857 0h3.429a.86.86 0 01.857.857v12.6L19.107.529a2.289 2.289 0 013.75 1.757v27.428a2.289 2.289 0 01-3.75 1.757L5.143 18.621v12.521a.86.86 0 01-.857.858H.857a.86.86 0 01-.856-.858z"
            />
        </svg>
    )
}