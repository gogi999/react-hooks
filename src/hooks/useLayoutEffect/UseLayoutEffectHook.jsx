import React, {
  useEffect,
  useLayoutEffect,
  useRef,
} from 'react';

const UseLayoutEffectHook = () => {
    const inputRef = useRef(null);

    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    }, []);

    useEffect(() => {
        inputRef.current.value = 'Hello';
    }, []);

    return (
        <div className="App">
            <input 
                ref={inputRef}
                value="Goran"
                style={{ width: 400, height: 60 }}
                readOnly
            />
        </div>
    );
}

export default UseLayoutEffectHook;
