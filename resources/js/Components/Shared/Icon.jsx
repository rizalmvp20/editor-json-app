import React from 'react';

export default function Icon({ path, className = "h-5 w-5", ...props }) {
    return (
        <svg className={className} viewBox="0 0 20 20" fill="currentColor" {...props}>
            <path fillRule="evenodd" d={path} clipRule="evenodd" />
        </svg>
    );
}