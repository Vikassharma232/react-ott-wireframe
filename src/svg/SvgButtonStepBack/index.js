import React from 'react';
import './style.scss';

export default function SvgButtonStepBack(props) {
    return (
        <svg 
            className="svg-button-step-back" 
            width={props.size ? props.size : '2rem'} 
            height={props.size ? props.size : '2rem'} 
            viewBox="0 0 32 32"
        >
            <g data-name="Elipse 11" fill="none">
                <circle cx={16} cy={16} r={16} stroke="none" />
                <circle cx={16} cy={16} r={15.5} />
            </g>
            <path
                d="M10.972 22.281V9.662a.358.358 0 01.357-.357h1.429a.358.358 0 01.357.357v5.25l5.819-5.387a.954.954 0 011.562.732v11.428a.954.954 0 01-1.562.733l-5.819-5.354v5.217a.358.358 0 01-.357.357H11.33a.358.358 0 01-.358-.357z"
            />
        </svg>
    )
}