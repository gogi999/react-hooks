import React, { useRef } from 'react';

import Button from './Button';

const UseImperativeHandleHook = () => {
    const buttonRef = useRef(null);

    return (
        <div>
            <button onClick={() => {buttonRef.current.alterToggle()}}>
                Button from parent
            </button>
            <br />
            <br />
            <Button ref={buttonRef} />
        </div>
    );
}

export default UseImperativeHandleHook;
