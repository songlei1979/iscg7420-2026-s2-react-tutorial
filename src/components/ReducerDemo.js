import React, {useReducer} from 'react';

const initialState = {count: 0};

const reducer = (state, action) => {
    switch (action.type){
        case "increment":
            return {count: state.count + 1};
        case "decrement":
            return {count: state.count - 1};
        default:
            return state;
    }

}


function ReducerDemo(props) {
    const [state, dispatch] =
        useReducer(reducer, initialState);


    return (
        <div>
            <h1>Reducer Demo</h1>
            <p>Count: {state.count}</p>
            <button onClick={() =>
                dispatch({type: "increment"})}>
                Increment
            </button>
            {state.count}
            <button onClick={() =>
                dispatch({type: "decrement"})}>
                Decrement
            </button>

        </div>
    );
}

export default ReducerDemo;