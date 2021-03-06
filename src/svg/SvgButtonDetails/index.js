import React from 'react';
import './style.scss';

export default function SvgButtonDetails(props) {
    return (
        <svg 
            className="svg-button-details" 
            width={props.size ? props.size : '2rem'} 
            height={props.size ? props.size : '2rem'} 
            viewBox="0 0 32 32" 
            {...props}
        >
            <path
                d="M16 1C11.993 1 8.227 2.56 5.393 5.393A14.902 14.902 0 001 16c0 4.007 1.56 7.773 4.393 10.607A14.902 14.902 0 0016 31c4.007 0 7.773-1.56 10.607-4.393A14.902 14.902 0 0031 16c0-4.007-1.56-7.773-4.393-10.607A14.902 14.902 0 0016 1m0-1c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0z"
            />
            <path
                d="M15.005 10.444l.644-.644a.693.693 0 01.984 0l5.64 5.638a.693.693 0 010 .984l-5.64 5.64a.693.693 0 01-.984 0l-.644-.644a.7.7 0 01.012-1l3.5-3.331h-8.339a.7.7 0 01-.7-.7v-.928a.7.7 0 01.7-.7h8.335l-3.5-3.331a.692.692 0 01-.008-.984z"
            />
        </svg>
    )
}