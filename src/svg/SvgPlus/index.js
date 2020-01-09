import React from 'react';
import './style.scss';

export default function SvgPlus(props) {
    return (
        <svg 
            width={props.size ? props.size : '2rem'} 
            height={props.size ? props.size : '2rem'} 
            viewBox="0 0 32 32" 
            {...props}
        >
            <path
                d="M29.714 12.571H19.429V2.286A2.286 2.286 0 0017.143 0h-2.286a2.286 2.286 0 00-2.286 2.286v10.285H2.286A2.286 2.286 0 000 14.857v2.286a2.286 2.286 0 002.286 2.286h10.285v10.285A2.286 2.286 0 0014.857 32h2.286a2.286 2.286 0 002.286-2.286V19.429h10.285A2.286 2.286 0 0032 17.143v-2.286a2.286 2.286 0 00-2.286-2.286z"
                fill="#333"
            />
        </svg>
    )
}