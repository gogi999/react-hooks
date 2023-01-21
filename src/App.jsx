import './App.css';

import React from 'react';

import UseCallbackHook from './hooks/useCallbackHook/UseCallbackHook';

// import UseMemoHook from './hooks/useMemoHook/UseMemoHook';

// import UseContextHook from './hooks/useContextHook/UseContextHook';

// import UseImperativeHandleHook
//   from './hooks/useImperativeHandle/UseImperativeHandleHook';

// import UseLayoutEffectHook from './hooks/useLayoutEffect/UseLayoutEffectHook';

// import UseRefHook from './hooks/useRefHook/UseRefHook';

// import UseEffectHook from './hooks/useEffectHook/UseEffectHook';

// import UseReducerHook from './hooks/useReducerHook/UseReducerHook';

// import UseStateHook from './hooks/useStateHook/UseStateHook';

const App = () => {
    return (
        <div className="App">
            {/* <UseStateHook /> */}
            {/* <UseReducerHook /> */}
            {/* <UseEffectHook /> */}
            {/* <UseRefHook /> */}
            {/* <UseLayoutEffectHook /> */}
            {/* <UseImperativeHandleHook /> */}
            {/* <UseContextHook /> */}
            {/* <UseMemoHook /> */}
            <UseCallbackHook />
        </div>
    );
}

export default App;
