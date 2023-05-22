import "./App.css"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from "./Components/Header/Header";
import Landing from "./Components/Landing/Landing";
import About from "./Components/About/About";

function App () {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App