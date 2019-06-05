import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './page/header'
import Content from './page/content'
import Footer from './page/footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
