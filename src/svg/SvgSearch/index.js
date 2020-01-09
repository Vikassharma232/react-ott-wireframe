import React from 'react';
import './style.scss';

export default function SvgSearch(props) {
    return (
        <svg 
            className="svg-search" 
            width={props.size ? props.size : '2rem'} 
            height={props.size ? props.size : '2rem'} 
            viewBox="0 0 32 32"
        >
            <path
                d="M31.559 27.666l-6.231-6.231A1.5 1.5 0 0024.266 21h-1.018A12.993 12.993 0 1021 23.248v1.019a1.5 1.5 0 00.437 1.062l6.231 6.231a1.494 1.494 0 002.119 0l1.769-1.769a1.507 1.507 0 00.003-2.125zM13 21a8 8 0 118-8 7.995 7.995 0 01-8 8z"
            />
        </svg>
    )
}