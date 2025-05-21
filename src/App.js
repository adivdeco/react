// 1. previous value

// import React, { useEffect, useRef, useState } from 'react';

// function PreviousValue() {
//   const [value, setValue] = useState('');
//   const prevValue = useRef('');

//   useEffect(() => {
//     prevValue.current = value;
//   }, [value]);

//   return (
//     <div>
//       <input value={value} onChange={(e) => setValue(e.target.value)} />
//       <p>Current: {value}</p>
//       <p>Previous: {prevValue.current}</p>
//     </div>
//   );
// }

// export default PreviousValue;


//2. animationmoving box/////////
// import React, { useRef } from 'react';

// function MovingBox() {
//   const boxRef = useRef(null);

//   const moveRight = () => {
//     const box = boxRef.current;
//     let left = 0;

//     const interval = setInterval(() => {
//       if (left >= 300) {
//         clearInterval(interval);
//       } else {
//         left += 5;
//         box.style.left = `${left}px`;
//       }
//     }, 20);
//   };

//   return (
//     <div style={{ position: 'relative', height: '100px' }}>
//       <div
//         ref={boxRef}
//         style={{
//           position: 'absolute',
//           width: '50px',
//           height: '50px',
//           backgroundColor: 'red',
//         }}
//       ></div>
//       <button onClick={moveRight}>Move Right</button>
//     </div>
//   );
// }

// export default MovingBox;


// 3.timer

import React, { useRef, useState } from 'react';

function Timer() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current) return; // already running
    intervalRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null; // clear the reference
  };
const reset = ()=>{
  clearInterval(intervalRef.current)
  intervalRef.current = setCount(0);
}
  return (
    <div>
      <h2>Timer: {count} seconds</h2>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Timer;


// 3. show render count
// import React, { useRef, useState } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);
//   const renderCount = useRef(1); // holds value between renders

//   const increase = () => {
//     setCount(count + 1);
//     renderCount.current += 1;
//   };

//   return (
//     <div>
//       <p>Clicked: {count} times</p>
//       <p>Component rendered: {renderCount.current} times</p>
//       <button onClick={increase}>Click Me</button>
//     </div>
//   );
// }

// export default Counter;


// //4 focus input
// import React, { useRef } from 'react';

// function InputFocus() {
//   const inputRef = useRef(null);

//   const handleClick = () => {
//     // Focus the input field using ref
//     inputRef.current.focus();
//   };

//   return (
//     <div>
//       <input ref={inputRef} type="text" placeholder="Type here..." />
//       <button onClick={handleClick}>Focus Input</button>
//     </div>
//   );
// }

// export default InputFocus;
