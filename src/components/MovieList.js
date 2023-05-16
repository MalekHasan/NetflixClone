import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Movie from './Movie';

export default function MovieList(props) {

  return (  
<>
<Container>
<Row xs={1} md={4} className="g-4">
      {props.movies.map((item, idx) => (
<Movie item={item} idx={idx}/>
          ))}
    </Row>

</Container>
</> 
 )
}
