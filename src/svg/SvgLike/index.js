import React from 'react';
import './style.scss';

export default function SvgLike(props) {
    return (
        <svg 
            className="svg-like" 
            width={props.size ? props.size : '2rem'} 
            height={props.size ? props.size : '2rem'} 
            viewBox="0 0 32 32"
        >
            <g fill="none">
                <path d="M16 0A16 16 0 110 16 16 16 0 0116 0z" />
                <path
                    d="M16 1C11.993 1 8.227 2.56 5.393 5.393A14.902 14.902 0 001 16c0 4.007 1.56 7.773 4.393 10.607A14.902 14.902 0 0016 31c4.007 0 7.773-1.56 10.607-4.393A14.902 14.902 0 0031 16c0-4.007-1.56-7.773-4.393-10.607A14.902 14.902 0 0016 1m0-1c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0z"
                    fill="#fff"
                />
            </g>
            <path
                d="M12.641 15.688h-2.032A.609.609 0 0010 16.3v6.094a.609.609 0 00.609.606h2.032a.609.609 0 00.609-.609V16.3a.609.609 0 00-.609-.612zm-1.016 6.3a.609.609 0 11.609-.609.609.609 0 01-.609.605zm8.125-9.92c0 1.077-.659 1.681-.845 2.4h2.583A1.517 1.517 0 0123 15.944a1.838 1.838 0 01-.494 1.249 2.121 2.121 0 01-.236 2.018 2.008 2.008 0 01-.416 1.9 1.348 1.348 0 01-.156 1.133c-.518.745-1.8.755-2.889.755h-.075a7.289 7.289 0 01-3.034-.805 4 4 0 00-1.337-.411.3.3 0 01-.3-.3v-5.432a.3.3 0 01.09-.216c1.006-.994 1.438-2.046 2.263-2.872a3.075 3.075 0 00.645-1.5c.112-.463.348-1.463.861-1.463.609 0 1.828.2 1.828 2.068z"
                fill="#fff"
            />
        </svg>
    )
}