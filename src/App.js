import React from 'react';
import './App.css';
import { Route,Routes} from "react-router-dom"
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import Header2 from './components/Header2';
function App() {
  return (
    <div className="App">
    <Routes>
      <Route exact path="/" element={<HomePage/>}/>
      <Route exact path="/header" element={<Header/>}/>
      <Route exact path="/footer" element={<Footer/>}/>
      <Route exact path="/header2" element={<Header2/>}/>
    </Routes>

    </div>
  );
}

export default App;
