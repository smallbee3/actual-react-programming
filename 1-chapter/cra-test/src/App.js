import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [age, setAge] = useState(20);
  const prevAgeRef = useRef(20);
  useEffect(() => {
    prevAgeRef.current = age;
  }, [age]);
  const prevAge = prevAgeRef.current;
  const text = age === prevAge ? 'same' : age > prevAge ? 'order' : 'younger';
  return React.createElement("div", null, React.createElement("p", null, `age ${age} is ${text} than age ${prevAge}`), React.createElement("button", {
    onClick: () => {
      const age = Math.floor(Math.random() * 50 + 1);
      setAge(age);
    }
  }, "\uB098\uC774\uBCC0\uACBD"));
} // const domContainer = document.querySelector('#react-root');
// ReactDOM.render(React.createElement(Profile), domContainer);


export default App;