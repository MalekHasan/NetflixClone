import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Container } from 'react-bootstrap';
import MovieList from './MovieList';

export default function Home() {
    const [trendingMovies,setTrendingMovies]=useState([]);
    const fetchData=async()=>{
    const result= await axios.get(`${process.env.REACT_APP_SERVER_URL}trending`);
    setTrendingMovies(result.data)
    console.log(result.data)
    }
    useEffect(()=>{
        fetchData();
    },[])
  return (
    // https://image.tmdb.org/t/p/w500/
<>
<Container>
<MovieList movies={trendingMovies}/>
</Container>

</>  )
}
