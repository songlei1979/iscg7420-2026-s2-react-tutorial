import React, {useEffect, useState} from 'react';
import axios from "axios";
import {BaseUrl} from "../Constraints";
import Login from "./Login";

function SimpleBlogPosts(props) {
    const [posts, setPosts] = useState([]);
    const [token, setToken] = useState("");
    const [is_login, setIs_login] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setToken(token);
            setIs_login(true);
            fetchPosts();
            console.log(posts);
        }
    }, [token]);

    function fetchPosts() {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: BaseUrl + '/blog/posts/',
            headers: {
                'Authorization': 'Token ' + token
            }
        };

        axios.request(config)
            .then((response) => {
                console.log(response.data);
                setPosts(response.data);

            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        is_login ?
            <div>
                <h1>Posts</h1>
                <ul>
                    {posts.map((post, index) => (
                        <li key={index}>hi: {post.title}</li>)
                    )
                    }
                </ul>
            </div> :
            <div>
                <p>Please login</p>
                <Login/>
            </div>
    );
}

export default SimpleBlogPosts;