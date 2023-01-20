import './App.css';

import React from 'react';

import UseEffectHook from './hooks/useEffectHook/UseEffectHook';

// import UseReducerHook from './hooks/useReducerHook/UseReducerHook';

// import UseStateHook from './hooks/useStateHook/UseStateHook';

const App = () => {
    return (
        <div className="App">
            {/* <UseStateHook /> */}
            {/* <UseReducerHook /> */}
            <UseEffectHook />
        </div>
    );
}

export default App;
