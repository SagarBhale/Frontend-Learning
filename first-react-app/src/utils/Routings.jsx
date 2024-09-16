import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Components/Routing/Home';
import User from '../Components/Routing/User';
import About from '../Components/Routing/About';

const Routings = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<User />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Routings;
