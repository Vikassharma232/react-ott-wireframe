import React from 'react';
import './style.scss';

export default function SvgClock(props) {
    return (
        <svg 
            className="svg-clock" 
            width={props.size ? props.size : '2rem'} 
            height={props.size ? props.size : '2rem'} 
            viewBox="0 0 32 32"
        >
            <path
                d="M16 0a16 16 0 1016 16A16 16 0 0016 0zm0 28.9A12.9 12.9 0 1128.9 16 12.9 12.9 0 0116 28.9zm3.987-6.735l-5.477-3.978a.779.779 0 01-.316-.626V6.968a.776.776 0 01.774-.774h2.065a.776.776 0 01.774.774v9.142l4.31 3.135a.774.774 0 01.168 1.084L21.071 22a.78.78 0 01-1.084.168z"
            />
        </svg>
    )
}