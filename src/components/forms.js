import React, {useState} from 'react';

function Forms(props) {

    const [name, setName] = useState("")
    const [age, setAge] = useState(0)

    function setValues() {
        setName("Lei Song");
        setAge(30);
    }

    function addone() {
        setAge(age + 1);
    }

    function deleteone() {
        setAge(age - 1);
    }

    return (
        <div>
            <h1>Form component</h1>
            <p>Name: {name}</p>
            <p>Age: <button onClick={addone}>+</button>
                {age}
                <button onClick={deleteone}>-</button>
            </p>
            <button onClick={setValues}>Set Name</button>
        </div>
    );
}

export default Forms;