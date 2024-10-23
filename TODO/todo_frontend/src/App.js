import React from 'react';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import Signup from './Signup';


function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Todos" element={<Home />} />
          <Route path="/Signin" element={<Home />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>

      </BrowserRouter>

    </main>
  );
}

export default App;
