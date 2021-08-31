import React from "react";
import './App.css';
import AllUsers from "./Components/AllUsers";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Layouts/Navbar";
import Services from "./Components/Services";
import Notfound from "./Components/Notfound"
import { BrowserRouter as Router, Route, Switch }from "react-router-dom";
import EditUser from "./Components/EditUser";
import AddUser from "./Components/AddUser";

function App() {
  return(
    <Router>
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={AllUsers} />;
        <Route exact path="/about" component={About} />;
        <Route exact path="/services" component={Services} />;
        <Route exact path="/contact" component={Contact} />;
        <Route exact path="/edit/:id" component={EditUser} />;
        <Route exact path="/add/:id" component={AddUser} />;        <Route component={Notfound} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
