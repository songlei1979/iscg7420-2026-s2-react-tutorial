import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    constructor(props) {
        super(props);
    }

    clickMe() {
        alert('You clicked me - from helloworld2');
    }

    render() {
        return (
            <div>
               <h1>Hello World</h1>
               <h2>From class based Component</h2>
                <button onClick={this.clickMe}>
                    Click me
                </button>
                <button onClick={this.props.clickMe}>
                    Click me from App
                </button>
            </div>
        );
    }
}

MyComponent.propTypes = {};

export default MyComponent;
