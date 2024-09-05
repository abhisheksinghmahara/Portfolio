import './App.css';
import React from 'react';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
// import Header from './components/Header';
import Projects from './components/Projects';
// import NoPage from './components/NoPage';
import Home from './components/Home';
import Contacts from './components/Contacts';
function App() {
  return (

 <Router>
 <div className="App bg-stone-200 flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col">
      <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={< Contacts />} />
        <Route path="*" element={<Home />} /> 
      </Routes>
      </main>
      <Footer/>
      </div>
    </Router>







  
    
  );
}

export default App;
