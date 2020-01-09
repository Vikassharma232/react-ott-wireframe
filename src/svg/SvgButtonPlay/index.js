import React from 'react';
import './style.scss';

export default function SvgButtonPlay(props) {

    return (
        <svg 
            className="svg-button-play" 
            width={props.size ? props.size : '2rem'} 
            height={props.size ? props.size : '2rem'} 
            viewBox="0 0 32 32"
        >
            <g fill={props.fill}>
                <circle cx={16} cy={16} r={16} stroke="none" />
                <circle cx={16} cy={16} r={15.5} fill="none" />
            </g>
            <path d="M22.5 16.22l-11 7v-14z" fill={props.fill} />
        </svg>
    )
}