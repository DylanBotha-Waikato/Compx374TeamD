import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AuthCallback from "./google_auth/AuthCallback";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/auth/google/callback" exact Component={AuthCallback} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
