import React, { useState } from 'react';

export default function AccordionItem({ title, children, startOpen = false }) {
    const [isOpen, setIsOpen] = useState(startOpen);
    
    return (
        <div className="border-b border-slate-200">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full text-left flex justify-between items-center p-4 hover:bg-slate-50 focus:outline-none">
                <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
                <svg className={`w-5 h-5 text-slate-500 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-full' : 'max-h-0'}`}>
                <div className="p-4 pt-0 text-slate-600 space-y-3 prose max-w-none">
                    {children}
                </div>
            </div>
        </div>
    );
};