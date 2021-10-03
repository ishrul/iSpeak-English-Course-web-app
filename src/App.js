import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Alarm, ArrowRight, Facebook } from "react-bootstrap-icons";

function App() {
  return (
    <div className="App">
      <Alarm color="royalblue" size={96} />
    </div>
  );
}

export default App;
