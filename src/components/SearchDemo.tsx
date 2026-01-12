'use client';

import { useEffect, useRef } from 'react';

export default function SearchFocus() {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        // Demonstration of direct DOM manipulation and EventListeners within a React effect
        const inputElement = document.getElementById('global-search');

        if (inputElement) {
            // Direct DOM manipulation
            inputElement.style.border = '2px solid var(--primary)';

            // Event Listener
            const handleFocus = () => {
                console.log('Search focused!');
            };

            inputElement.addEventListener('focus', handleFocus);

            // Cleanup
            return () => {
                inputElement.removeEventListener('focus', handleFocus);
            };
        }
    }, []);

    return (
        <div style={{ margin: '1rem 0' }}>
            <input
                id="global-search"
                type="text"
                placeholder="Search doctors (DOM Demo)..."
                style={{
                    padding: '0.5rem',
                    borderRadius: '4px',
                    width: '100%',
                    border: '1px solid #ccc'
                }}
            />
        </div>
    );
}
