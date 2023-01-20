import React, { useReducer } from 'react';

const UseReducerHook = () => {
    /*
    const [count, setCount] = useState(0);
    const [showText, setShowText] = useState(true);
    */
    const reducer = (state, action) => {
        switch (action.type) {
            case 'INCREMENT':
                return {
                    count: state.count + 1,
                    showText: state.showText,
                }
            case 'TOGGLE_SHOW_TEXT':
                return {
                    count: state.count,
                    showText: !state.showText,
                }
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, { 
        count: 0, 
        showText: true,
    });

    return (
        <div>
            {/* <h1>{count}</h1> */}
            <h1>{state.count}</h1>
            <br />
            <button 
                onClick={() => {
                    // setCount((prevCount) => prevCount + 1);
                    // setShowText(!showText);
                    dispatch({ type: 'INCREMENT' });
                    dispatch({ type: 'TOGGLE_SHOW_TEXT' });
                }}
            >
                Click Here
            </button>
            <br />
            {/* {showText && <p>This is a text</p>} */}
            {state.showText && <p>This is a text</p>}
        </div>
    );
}

export default UseReducerHook;
