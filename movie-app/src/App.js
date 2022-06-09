import React from 'react';
//add imports
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import MovieDetail from "./components/movieDetail/MovieDetail";
import './App.scss';

function App() {

  // add routes for /, /movie/id and *
  return (
    <div className="App">
     
        <Header />
        <div className="container">
       
        </div>
        <Footer />
    
    </div>
  );
}

export default App;
