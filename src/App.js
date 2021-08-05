import bmiImg from './assets/bathroom-scale.png'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutBmi from './components/AboutBmi';
import Contact from './components/Contact';
import Home from './components/Home';
import UnderWeight from './components/UnderWeight';
import NormalWeight from './components/NormalWeight';
import OverWeight from './components/OverWeight';
import Obesity from './components/Obesity';







function App() {


  return (




    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">

            <Link className="navbar-brand" to="/"><img src={bmiImg} alt="" /></Link>

            <div className="collapse navbar-collapse header-fonts" id="navbarSupportedContent" style={{ display: "flex", marginLeft: 50 }}>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item" style={{ marginLeft: 30 }}>
                  <Link className="nav-link " to="/">Home Page</Link>
                </li>
                <li className="nav-item" style={{ marginLeft: 30 }}>
                  <Link className="nav-link " to="/about">About BMI</Link>
                </li>
                <li className="nav-item" style={{ marginLeft: 30 }}>
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
              </ul>



            </div>

          </div>
        </nav>

        

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <AboutBmi />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/underweight">
            <UnderWeight />
          </Route>
          <Route path="/normalweight">
            <NormalWeight />
          </Route>
          <Route path="/overweight">
            <OverWeight />
          </Route>
          <Route path="/obesity">
            <Obesity />
          </Route>
        </Switch>


      </div>
    </Router>
  );
}

export default App;
