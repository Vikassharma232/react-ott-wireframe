import React from 'react';
import './style.scss';

export default function SvgPlayFilled(props) {
    return (
        <svg 
            className="svg-play-filled" 
            width={props.size ? props.size : '2rem'} 
            height={props.size ? props.size : '2rem'} 
            viewBox="0 0 32 32"
        >
            <path 
                d="M16,32A16,16,0,0,1,9.772,1.257,16,16,0,0,1,22.228,30.743,15.9,15.9,0,0,1,16,32ZM11.826,10.435V22.261l10.434-5.913L11.826,10.435Z" 
            />
        </svg>
    )
}