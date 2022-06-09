import React, {useState} from 'react';
import { Link } from "react-router-dom";
import user from "../../images/user-icon.png";
import { useDispatch } from 'react-redux';
import "./Header.scss";
import { fetchAsyncMovies } from '../../features/movies/movieSlice';

function Header() {

  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(term);
    dispatch(fetchAsyncMovies(term));
    setTerm("");
  }

  return (
    <div className="header">
      
        <div className="logo"><Link to="/">Movie App </Link></div>
        <div className='search-bar'>
          <form onSubmit={submitHandler}>
            <input type="text" value={term} placeholder="Search Movies or Shows" onChange={(e) => setTerm(e.target.value)} />
            <button type="submit"><i className="fa fa-search"></i></button>
          </form>
        </div>
     
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  )
}

export default Header