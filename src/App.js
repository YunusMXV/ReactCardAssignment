//import logo from './logo.svg';
import './App.css';
import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, Container} from 'react-bootstrap';
//import { TestButton } from './Components/Buttons';
import { PizzaCard } from './Components/Cards';


function App() {
  document.body.style.backgroundColor = "#10789f";
  return (
    <div className="App" style={{borderTop: "100px solid #FFFFFF", position: "relative"}}>
      <p style={{fontWeight: "bold", fontFamily: "Montserrat, sans-serif", fontSize: "28px", height: "auto", position: "relative", top: "0", left: "-32%", transform: "translateY(25%)"}}>Chicken Flavours</p>
      <img src="https://logos-world.net/wp-content/uploads/2021/08/Dominos-Logo-2012-present.png" alt="Dominos PK" style={{width: "15%", height: "auto", position: "absolute", top: "-110px", left: "10%"}} />
      <header>
        <Container>
            <PizzaCard/>
        </Container>
      </header>
    </div>
  );
}

export default App;
