import React from 'react';
import './style.scss';

export default function SvgClose(props) {
    return (
        <svg className="svg-close" width="2em" height="2em" viewBox="0 0 32 32">
            <path
                d="M22.065 16l9.1-9.1a2.86 2.86 0 000-4.044L29.143.834a2.86 2.86 0 00-4.044 0l-9.1 9.1-9.1-9.1a2.86 2.86 0 00-4.044 0L.837 2.859a2.86 2.86 0 000 4.044l9.1 9.1-9.1 9.1a2.86 2.86 0 000 4.044l2.022 2.022a2.86 2.86 0 004.044 0l9.1-9.1 9.1 9.1a2.86 2.86 0 004.044 0l2.022-2.022a2.86 2.86 0 000-4.044z"
            />
        </svg>
    )
}