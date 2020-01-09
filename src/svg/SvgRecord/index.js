import React from 'react';
import './style.scss';

export default function SvgRecord(props) {
    return (
        <svg 
            className="svg-record" 
            width={props.size ? props.size : '2rem'} 
            height={props.size ? props.size : '2rem'} 
            viewBox="0 0 32 32"
        >
            <g fill="none" stroke="#333">
                <circle cx={16} cy={16} r={16} stroke="none" />
                <circle cx={16} cy={16} r={15.5} />
            </g>
            <circle
                cx={6} cy={6} r={8} transform="translate(10 10)" fill="#333"
            />
        </svg>
    )
}