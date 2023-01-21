import React, {
  useCallback,
  useState,
} from 'react';

import Child from './Child';

const UseCallbackHook = () => {
    // eslint-disable-next-line no-unused-vars
    const [data, setData] = useState('Please subscribe to the channel!');
    const [toggle, setToggle] = useState(false);

    const returnComment = useCallback((name) => {
        return data + name;
    }, [data]);

    return (
        <div className="App">
            <Child returnComment={returnComment} />
            <button onClick={() => setToggle(!toggle)}>
                Toggle
            </button>
            <br />
            <br />
            {toggle && <h1>toggle</h1>}
        </div>
    );
}

export default UseCallbackHook;
