import logo from './logo.svg';
import './App.css';
import Notes from './Notes';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import Home from './home'
import About from './about'
import Contact from './contact'
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Link to="/">Home</Link>
        <Link to="/notes">Notes</Link> */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
        </Routes>
      </Router>  
    </div>
  );
}

export default App;


