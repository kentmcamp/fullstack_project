import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Components/LoginPage/LoginPage';
import HomePage from './Components/HomePage/HomePage';
import AddBooks from './Components/AddBooks/AddBooks';
import Categories from './Components/Categories/Categories';
import ViewBooks from './Components/ViewBooks/ViewBooks';
import './App.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/add" element={<AddBooks/>} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="/view" element={<ViewBooks/>} />
      </Routes>
    </Router>
  );
}

export default App;
