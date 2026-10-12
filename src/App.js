import logo from './logo.svg';
import './App.css';
import Helloworld from "./components/Helloworld";
import Helloworld2 from "./components/Helloworld2";
import Forms from "./components/forms";
import Conditions from "./components/Conditions";
import Loops from "./components/Loops";
import Fetchdata from "./components/Fetchdata";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    function clickMe() {
        alert('You clicked me - from app');
    }

  return (
    <div className="App">
      <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/loops">Loops</Nav.Link>
              <Nav.Link href="/conditions">Conditions</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      </nav>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loops" element={<Loops />} />
        <Route path="/conditions" element={<Conditions />} />
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
