import React from 'react';
import './style.scss';

export default function SvgLive(props) {
    return (
        <svg 
            className="svg-live" 
            width={props.size ? props.size : '2rem'} 
            height={props.size ? props.size : '2rem'} 
            viewBox="0 0 20 32"
        >
            <path
                d="M18.501 10h-7.212l2.662-8.112A1.506 1.506 0 0012.501 0h-9a1.5 1.5 0 00-1.49 1.3l-2 15a1.5 1.5 0 001.49 1.7H8.92L6.039 30.156a1.5 1.5 0 002.756 1.094l11-19A1.5 1.5 0 0018.501 10z"
            />
        </svg>
    )
}