import './App.css';
import React, { useState, useRef, useEffect } from "react";
import Head from './components/Head';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Head />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
