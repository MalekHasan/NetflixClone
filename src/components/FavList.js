import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MovieList from './MovieList';

export default function FavList() {

  const [favMovies,setFavMovies]=useState([]);
  const getFav=async ()=>{
    const url= `${process.env.REACT_APP_SERVER_URL}movie`;
    const favResult=await axios.get(url)
    setFavMovies(favResult.data);
  } 
  useEffect(()=>{
    getFav()
  },[])
  return (
<>
<MovieList  movies={favMovies}/>
</>  )
}
