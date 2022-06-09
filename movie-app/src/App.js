import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import MovieDetail from "./components/movieDetail/MovieDetail";
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/movie/:imdbID" element={<MovieDetail/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
