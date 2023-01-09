import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Detail from './components/Detail';
import Login from './components/Login';

// time stemp 02:22:
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/detail/:id" element={<Detail/>}/>
        </Routes>
      </Router>
      {/* <Home /> */}
    </div>
  );
}

export default App;
