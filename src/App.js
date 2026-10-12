import logo from './logo.svg';
import './App.css';
import Helloworld from "./components/Helloworld";
import Helloworld2 from "./components/Helloworld2";

function App() {

    function clickMe() {
        alert('You clicked me - from app');
    }

  return (
    <div className="App">
      <Helloworld clickMe={clickMe} name="John" age={30}/>
        <Helloworld2 clickMe={clickMe}/>
    </div>
  );
}

export default App;
