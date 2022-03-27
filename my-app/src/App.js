import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/home";
import Round1 from "./components/home/round1/Round1";
import Round2 from "./components/home/round2/Round2";
import Round3 from "./components/home/round3/Round3";
import Round3a from "./components/home/round3a/Round3a";
import Round4 from "./components/home/round4/Round4";
import Round5 from "./components/home/round5/Round5";
import Report from "./components/home/report/Report";


function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/round3b" exact>
              {/* <h1>hi im a round 1</h1> */}
              <Round1/>
            </Route>
            <Route path="/round1" exact>
             
              <Round2/>
            </Route>
            <Route path="/round2" exact>
             
              <Round3/>
            </Route>
            <Route path="/round3a" exact>
              
              <Round3a/>
            </Route>
            <Route path="/round4" exact>
              <Round4/>
              
            </Route>
            <Route path="/round5" exact>
              <Round5/>
              
            </Route>
            <Route path="/report" exact>
              
              <Report/>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
