import React, {useEffect, useState} from 'react';

function Fetchdata(props) {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetchPosts();
    }, []);

    function fetchPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
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