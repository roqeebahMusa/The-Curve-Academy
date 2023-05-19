import "./App.css"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from "./Components/Header/Header";
import Landing from "./Components/Landing/Landing";

function App () {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App