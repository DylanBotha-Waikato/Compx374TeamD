import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

import Home from "./pages/Home";



function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' exact Component={Home}/>
        </Routes> 
        <Footer />
      </Router>
    </div>
  );
}

export default App;
