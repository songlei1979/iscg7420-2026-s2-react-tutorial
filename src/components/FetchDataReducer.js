import React, {useEffect, useReducer} from 'react';
import axios from "axios";

const initialState = {
    posts: [],
    error: ""
};

const reducer = (state, action) =>{
    switch (action.type){
        case "success":
            return {posts: action.payload};
        case "fail":
            return {
                posts: [],
                error: "Data is not available"};
        default:
            return state;
    }
}

function FetchDataReducer(props) {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/10000')
            .then(response =>
                dispatch({type: "success", payload: response.data}))
            .catch(error =>
                dispatch({type: "fail"}));
    }, []);

    return (
        <div>
            <h1>Posts</h1>
            <p>Error: {state.error}</p>
            {
                state.posts.map((post, index) => (
                    <li key={index}>{post.title}</li>
                ))
            }
        </div>
    );
}

export default FetchDataReducer;