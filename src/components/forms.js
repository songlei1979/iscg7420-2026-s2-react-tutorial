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

    function nameHandler(e) {
        setName(e.target.value);
    }

    function ageHandler(e) {
        setAge(e.target.value);
    }

    function submit() {
        alert("name: " + name + " age:" + age
            + "I will send it out")
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

            <input type="text" value={name}
                   onChange={nameHandler} />
            <input type="number" value={age}
                   onChange={ageHandler} />
            <button onClick={submit}>Submit</button>
        </div>
    );
}

export default Forms;