import React from 'react';
// Importe as dependências necessárias do react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importe seus componentes
import Header from './Header';
import Main from './Main';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/main" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;
