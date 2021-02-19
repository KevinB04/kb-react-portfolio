import React, { useState } from 'react';
// import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [error, setError] = useState("");
  return (
    <div className="App">
      <AlertContext.Provider value={{ error, setError }}>
        <Router basename="">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Portfolio" component={Portfolio} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Resume" component={Resume} />
          </Switch>
        </Router>
      </AlertContext.Provider>
    </div>
  );
}

export default App;