import React from 'react';

export default function Notification({ message, type, onDismiss }) {
    if (!message) return null;
    
    const baseClasses = "fixed bottom-5 right-5 p-4 rounded-lg shadow-lg text-white text-sm z-50 transition-opacity duration-300";
    const typeClasses = { success: 'bg-green-500', error: 'bg-red-500', info: 'bg-blue-500' };
    
    return (
        <div className={`${baseClasses} ${typeClasses[type] || typeClasses.info}`}>
            <span>{message}</span>
            <button onClick={onDismiss} className="ml-4 font-bold">X</button>
        </div>
    );
};