import CreateEvent from './components/CreateEvent'
import Navbar from './components/Navbar'
import Cardgenerator from './components/Cardgenerator'
import Home from './components/Home'
import Contact from './components/Contact'
import Aboutus from './components/AboutUs'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/create-event">
          <CreateEvent />
        </Route>
        <Route path="/card-generator">
          <Cardgenerator />
        </Route>
        <Route path="/about-us">
          <Aboutus />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

    </Router>

  );
}

export default App;
