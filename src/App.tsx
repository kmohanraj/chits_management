import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router} from "react-router-dom"
import { Container } from 'react-bootstrap';


function App() {
  return (
    <Router>
      <Container fluid>
        <div>Home Page</div>
      </Container>
    </Router>
  );
}

export default App;
