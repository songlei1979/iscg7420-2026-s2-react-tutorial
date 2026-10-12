import React from 'react';
import Fetchdata from "../components/Fetchdata";
import Forms from "../components/forms";

function Home(props) {
    return (
        <div>
            <h1>Home</h1>
            <Fetchdata/>
            <Forms/>

        </div>
    );
}

export default Home;