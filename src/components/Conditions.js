import React, {useState} from 'react';

function Conditions(props) {
    const [temperature, setTemperature] =
        useState(0);

    const [paragraph, setParagraph] = useState("")

    function temperatureHandler(e) {
        setTemperature(e.target.value);
    }

    function paragraphHandler(e) {
        setParagraph(e.target.value);
    }

    return (
        <div>
            <h1>Conditions</h1>
            <input type="number" value={temperature}
                   onChange={temperatureHandler} />
            <p>Temperature: {temperature}</p>
            <p>Condition: {temperature > 30 ? 'Hot' : 'Cold'}
            </p>

           <p>
               <textarea value={paragraph} cols="50" rows="10"
            onChange={paragraphHandler}>
               </textarea>
           </p>
            <p>{paragraph}</p>
        </div>
    );
}

export default Conditions;