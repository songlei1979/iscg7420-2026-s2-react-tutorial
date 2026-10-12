import logo from './logo.svg';
import './App.css';
import Helloworld from "./components/Helloworld";
import Helloworld2 from "./components/Helloworld2";
import Forms from "./components/forms";
import Conditions from "./components/Conditions";
import Loops from "./components/Loops";

function App() {

    function clickMe() {
        alert('You clicked me - from app');
    }

  return (
    <div className="App">
      <Helloworld clickMe={clickMe} name="John" age={30}/>
        <Helloworld2 clickMe={clickMe} name="John" age={30}/>
        <Forms/>
        <Conditions/>
        <Loops/>
    </div>
  );
}

export default App;
