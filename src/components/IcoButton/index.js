import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.scss';

export default function IcoButton(props) {
    const circleFill = props.circleFill ? 'rgba(0, 0 ,0, 0.5)' : 'none';
    return (
        <div className="ico-button">
            <svg viewBox="0 0 32 32" fill="currentColor">
                <circle cx={16} cy={16} r={15.38} fill={circleFill}/>
                <path d="M16 1.24A14.76 14.76 0 111.24 16 14.78 14.78 0 0116 1.24M16 0a16 16 0 1016 16A16 16 0 0016 0z" />
            </svg>
            <FontAwesomeIcon icon={props.icon} className="fa-ico" fixedWidth />
        </div>
    )
}