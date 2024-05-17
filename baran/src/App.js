import Navbar from "./Components/navbar/navbar";
import React from 'react';
import Shop from './pages/Shop'
import About from './pages/About';
import Categories from './pages/Categories';
import Contacts from './pages/Contacts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/> } />
          <Route path="one" element={<Categories/>} />
          <Route path="two" element={<About/>} />
          <Route path="three" element={<Contacts/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
