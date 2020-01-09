import React from 'react';
import './style.scss';

export default function SvgChevron(props) {
    return (
        <svg 
            className="svg-chevron" 
            width={props.size ? props.size : '2rem'} 
            height={props.size ? props.size : '2rem'} 
            viewBox="0 0 19.42 32"
        >
            <path
                d="M.52 14.756L14.757.515a1.759 1.759 0 012.487 0l1.661 1.661a1.759 1.759 0 010 2.484L7.62 16l11.288 11.34a1.759 1.759 0 010 2.484l-1.664 1.661a1.759 1.759 0 01-2.487 0L.52 17.244a1.759 1.759 0 010-2.488z"
            />
        </svg>
    )
}