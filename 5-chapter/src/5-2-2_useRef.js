import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

function Profile() {
    const [age, setAge] = useState(20);
    const prevAgeRef = useRef(20);
    useEffect(
        () => {
            prevAgeRef.current = age;
        },
        [age],
    );
    const prevAge =prevAgeRef.current;
    const text = age === prevAge ? 'same' : age > prevAge ? 'order' : 'younger';
    return (
        <div>
            <p>{`age ${age} is ${text} than age ${prevAge}`}</p>
            <button 
                onClick={() => {
                    const age = Math.floor(Math.random() * 50 + 1);
                    setAge(age);
                }}
            >
                나이변경
            </button>
        </div>
    );
}

const domContainer = document.querySelector('#react-root');
ReactDOM.render(React.createElement(Profile), domContainer);