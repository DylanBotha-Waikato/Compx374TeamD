import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

import Home from "./pages/Home";
import Details from './pages/Details';
import CreatePost from './pages/CreatePost';



function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/Details' exact Component={Details}/>
          <Route path='/CreatePost' exact Component={CreatePost}/>
        </Routes> 
        <Footer />
      </Router>
    </div>
  );
}

export default App;
