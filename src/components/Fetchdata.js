import React, {useEffect, useState} from 'react';
import axios from "axios";

function Fetchdata(props) {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetchPosts();
    }, []);

    function fetchPosts() {
        // https://jsonplaceholder.typicode.com/posts
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response =>
                setPosts(response.data))
            .catch(error => console.error(error))
    }

    return (
        <div>
            <h1>Fetch Data</h1>
            <ul>
                {posts.map((post, index) => (
                    <li key={index}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Fetchdata;