import React from 'react';
import './App.css';
import { Route,Routes} from "react-router-dom"
import HomePage from './pages/HomePage';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
    <Routes>
      <Route exact path="/" element={<HomePage/>}/>
      <Route exact path="/header" element={<Header/>}/>
    </Routes>

    </div>
  );
}

export default App;
