import React from 'react';
import './style.scss';

export default function SvgMobileMenu(props) {
    return (
        <svg
            className="svg-mobile-menu"
            width={props.size ? props.size : '2rem'} 
            height={props.size ? props.size : '2rem'} 
            viewBox="0 0 8 32"
        >
            <circle cx={4} cy={4} r={4} />
            <circle cx={4} cy={4} r={4} transform="translate(0 12)" />
            <circle cx={4} cy={4} r={4} transform="translate(0 24)" />
        </svg>
    )
}