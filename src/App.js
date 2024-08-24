import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './page/Home';
import Login from './page/Login';



function App() {
  console.log()
  return (
    <div className="App">
      <Router>
      <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>

 

    </div>
  );
}

export default App;
