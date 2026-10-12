import React from 'react';

function clickMe() {
    alert('You clicked me - from helloworld');
}

function Helloworld(props) {
    return (
        <div>
            <h1>Hello World</h1>
            <h2>From function based Component</h2>
            <button onClick={clickMe}>Click me</button>
            <button onClick={props.clickMe}>
                Click me from App
            </button>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );
}

export default Helloworld;