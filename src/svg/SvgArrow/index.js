import React from 'react';
import './style.scss';

export default function SvgArrow(props) {
    return (
        <svg 
            width={props.size ? props.size : '2rem'} 
            height={props.size ? props.size : '2rem'} 
            viewBox="0 0 32 31.189" 
            {...props}
        >
            <path
                d="M13.606 2.089L15.192.503a1.707 1.707 0 012.421 0L31.5 14.381a1.707 1.707 0 010 2.421L17.612 30.686a1.707 1.707 0 01-2.421 0L13.606 29.1a1.716 1.716 0 01.029-2.45l8.606-8.2H1.714A1.71 1.71 0 010 16.737V14.45a1.71 1.71 0 011.714-1.714H22.24l-8.606-8.2a1.7 1.7 0 01-.028-2.447z"
                fill="#333"
            />
        </svg>
    )
}