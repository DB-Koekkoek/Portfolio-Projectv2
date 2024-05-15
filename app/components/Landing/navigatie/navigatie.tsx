'use client'
import './navigatie.css'
import React, { useState, useEffect } from 'react';

export default function Nav() {
    const words = ['AUTIST', 'FRONTEDER', 'GRAFISCHVORMGEVER', 'WEBDESIGNER'];
    const [index, setIndex] = useState(0);
    const [elapsedTime, setElapsedTime] = useState(0); 

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % words.length);
            setElapsedTime(0); 
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setElapsedTime(prevElapsedTime => prevElapsedTime + 2);
        }, 1000);

        return () => clearInterval(timer);
    }, [index]);

    return (
        <nav>
            <div className='words'> Ik ben een: {words[index].split(' ').map((word, idx) => (
                    <span key={idx} className={`word-${word.toLowerCase()}`}>{word}</span>
                ))}
            </div>
            <ul>

            </ul>
        </nav>
    );
}
