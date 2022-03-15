import {HashRouter as Router,Switch,Route} from "react-router-dom"
import Homepage from "./Components/Homepage";
import Courses from "./Components/Navbar/Courses"
import Topcontent from "./Components/Navbar/Topcontent"
import Contact from "./Components/Navbar/Contact"
import Login from "./Components/Navbar/Login"
import SignUp from "./Components/Navbar/SignUp"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Homepage} exact/>
          <Route path="/courses" component={Courses} exact/>
          <Route path="/topcontent" component={Topcontent} exact/>
          <Route path="/contact" component={Contact} exact/>
          <Route path="/login" component={Login} exact/>
          <Route path="/signup" component={SignUp} exact/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
