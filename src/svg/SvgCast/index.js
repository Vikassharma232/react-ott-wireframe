import React from 'react';
import './style.scss';

export default function SvgCast(props) {
    return (
        <svg 
            className="svg-cast" 
            width={props.size ? props.size : '2rem'} 
            height={props.size ? props.size : '2rem'} 
            viewBox="0 0 39.111 32"
        >
            <path
                d="M0 12.444V16a16 16 0 0116 16h3.556A19.556 19.556 0 000 12.444z"
            />
            <path
                d="M0 19.555v3.556A8.892 8.892 0 018.889 32h3.556A12.447 12.447 0 000 19.555z"
            />
            <path
                d="M0 26.667V32h5.333A5.338 5.338 0 000 26.667z"
            />
            <path
                d="M35.556 0h-32A3.555 3.555 0 000 3.555v5.333h3.556V3.555h32v24.889H23.111V32h12.444a3.555 3.555 0 003.556-3.556V3.555A3.555 3.555 0 0035.556 0z"
            />
        </svg>
    )
}