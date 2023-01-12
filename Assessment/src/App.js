import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootswatch/dist/united/bootstrap.min.css";
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import { Navbar } from "./components/Navbar";
import { DogImage } from "./components/DogImage";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
       <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" component={DogImage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
