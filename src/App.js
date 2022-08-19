import React from 'react'; 
import {useState} from 'react';
import './App.css';


export default function App() {
  const [isHoverLeft, setIsHoverLeft] = useState(false);
  const [isHoverRight, setIsHoverRight] = useState(false);

  return (
    <div className="App">
      <div
        className={`container${isHoverLeft ? ' hover-left' : ''}${
          isHoverRight ? ' hover-right' : ''
        }`}
      >
        <div
          className="split-left"
          onMouseEnter={() => setIsHoverLeft(true)}
          onMouseLeave={() => setIsHoverLeft(false)}
        >
          <button className="btn-left"> VERANO </button>
        </div>
        <div
          className="split-right"
          onMouseEnter={() => setIsHoverRight(true)}
          onMouseLeave={() => setIsHoverRight(false)}
        >
          <button className="btn-right"> INVIERNO </button>
        </div>
      </div>
    </div>
  );
}
