import React from 'react'
import styles from './App.module.scss';
import Navigation from '../Navigation/Navigation';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../Home/Home';
import Abouts from '../Abouts/About';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import Slider from '../Slider/Slider';
import Business from '../Business/Business';

function App() {
  return (
    <Router>
        <div className="App">
          
        </div>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/abouts" element={<Abouts/>} />
            <Route path="/abouts/:id" element={<Abouts/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/pages" element={<Slider/>} />
            <Route path="/busieness" element={<Business />} />
            <Route path="/contacts" element={<Contact />} />
          </Route>
        </Routes>
    </Router>

  );
}

export default App;
