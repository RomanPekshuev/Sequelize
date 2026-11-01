'use client';

import { useState } from 'react';
import { greet } from '../action';

export default function GreetDemo() {
    const [message, setMessage] = useState('');
    return (
        <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
            <button 
                onClick={async () => setMessage(await greet('Студент'))}
                style={{ 
                    padding: '10px 20px', 
                    fontSize: '16px', 
                    cursor: 'pointer',
                    border: '1px solid #ccc',
                    borderRadius: '4px'
                }}
            >
                Поздороваться
            </button>
            <p style={{ marginTop: '20px', color: 'green', fontWeight: 'bold' }}>
                {message}
            </p>
        </div>
    );
}