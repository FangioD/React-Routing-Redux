import React, { useEffect } from 'react';
import MovieListing from "../movieListing/MovieListing";

import { useDispatch } from 'react-redux';
import { fetchAsyncMovies } from '../../features/movies/movieSlice';

function Home() {
 
  const dispatch = useDispatch();
  const movieText = "Harry";
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
  }, [dispatch]);


  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  )
}

export default Home