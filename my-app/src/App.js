import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/home";
import Round1 from "./components/round1/Round1";
import Round2 from "./components/home/round2/Round2";


function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/round3a" exact>
              {/* <h1>hi im a round 1</h1> */}
              <Round1/>
            </Route>
            <Route path="/round1" exact>
             
              <Round2/>
            </Route>
            <Route path="/round3" exact>
              <h1>hi im a round 3</h1>
              <Round1/>
            </Route>
            <Route path="/round4" exact>
              <h1>hi im a round 4</h1>
              <Round1/>
            </Route>
            <Route path="/report_sheet" exact>
              <h1>hi im a report sheet</h1>
              <Round1/>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
