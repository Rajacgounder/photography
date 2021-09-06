import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/About" component={About}></Route>
          <Route exact path="/Contact" component={Contact}></Route>
          <Route exact path="/Gallery" component={Gallery}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
