import React, {useState} from 'react';

function Loops(props) {
    const [nameList, setNameList] =
        useState([]);
    const [name, setName] = useState()

    function nameHandler(e) {
        setName(e.target.value);
    }

    function addName() {
        setNameList([...nameList, name]);
    }

    return (
        <div>
            <h1>Loops</h1>
            <p>
                <input type="text" value={name}
            onChange={nameHandler}/>
            </p>
            <button onClick={addName}>Add</button>
            <ul>
                {nameList.map((item_name, index) =>
                    <li key={index}>{item_name}</li>
                )}
            </ul>
        </div>
    );
}

export default Loops;