import React, { useState } from 'react';

const UseStateHook = () => {
    /*const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    }

    const decrement = () => {
        setCount((prevCount) => prevCount - 1);
    }*/
    const [inputValue, setInputValue] = useState('Hi there!');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <div>
            {/* <button onClick={increment}>
                Increment
            </button>
            <br />
            {count} {" "}
            <br />
            <button onClick={decrement}>
                Decrement
            </button> */}
            {inputValue}
            <br />
            <input placeholder="Enter something..." onChange={handleChange} />
        </div>
    );
}

export default UseStateHook;
