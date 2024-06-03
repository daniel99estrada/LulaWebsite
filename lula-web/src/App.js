import React from 'react';
import Navbar from './Navbar'; 
import Footer from './Footer';
import About from './About';// Assuming Navbar component is in the same directory
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Footer />
    </div>
  );
}

export default App;
