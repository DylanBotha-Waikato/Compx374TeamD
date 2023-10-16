import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Details from "./pages/Details";
import CreatePost from "./pages/CreatePost";
import SingleDashboard from "./pages/SingleDashboard";
import LoginError from "./pages/LoginError";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/Details" exact Component={Details} />
          <Route path="/CreatePost" exact Component={CreatePost} />
          <Route path="/SingleDashboard" exact Component={SingleDashboard} />
          <Route path="/LoginError" exact Component={LoginError} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
