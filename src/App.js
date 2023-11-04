import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // If you're using React Router for routing
import Header from './components/header/Header.tsx';
import Footer from './components/footer/Footer.tsx';
import Home from './pages/Home.tsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> 
        <main>
          <Routes>
            <Route exact path="/" element={<Home/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
