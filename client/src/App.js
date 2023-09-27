import React from 'react';
import './App.css';
import Header from './partials/header';
import Home from './components/HomePage/home';
// import Footer from './partials/footer';
import Login from './components/LoginPage/loginPage';
import WegzPlaylists from './components/singersName/Wegz/playlists';
// import NavbarMusic from './partials/navbarMusic';
import "https://kit.fontawesome.com/c2e094ea21.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/wegz/playlists' element={<WegzPlaylists />} />
          <Route path='/' element={<Home />} />
          <Route path='/musica/login' element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
