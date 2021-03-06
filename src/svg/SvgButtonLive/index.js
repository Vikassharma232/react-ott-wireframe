import React from 'react';
import './style.scss';

export default function SvgButtonLive(props) {
    return (
        <svg 
            className="svg-button-live" 
            width={props.size ? props.size : '2rem'} 
            height={props.size ? props.size : '2rem'} 
            viewBox="0 0 32 32"
        >
            <g 
                fill="none" 
            >
                <circle cx={16} cy={16} r={16} stroke="none" />
                <circle cx={16} cy={16} r={15.5} />
            </g>
            <path
                d="M20.694 13.002h-3.832l1.414-4.313a.8.8 0 00-.77-1h-4.781a.8.8 0 00-.79.691l-1.059 7.968a.8.8 0 00.79.9h3.938l-1.528 6.462a.8.8 0 001.464.581l5.841-10.094a.8.8 0 00-.687-1.195z"
            />
        </svg>
    )
}