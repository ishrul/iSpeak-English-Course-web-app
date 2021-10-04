import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import About from "./Components/About/About";
import NotFound from "./Components/NotFound/NotFound";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Blogs from "./Components/Blogs/Blogs";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/blogs">
              <Blogs />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
