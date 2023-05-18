import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap';
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ModalMovie from './ModalMovie';
export default function Home() {
    const [trendingMovies,setTrendingMovies]=useState([]);
    const [show,setShow]=useState(false);
    const [favMovie,setFavMovie]=useState({});
    const fetchData=async()=>{
    const result= await axios.get(`${process.env.REACT_APP_SERVER_URL}trending`);
    setTrendingMovies(result.data)
    console.log(result.data)
    }
    function handleShow(item){
      setShow(true);
      setFavMovie(item)
    }
    function handleClose(){
      setShow(false)
    }
    useEffect(()=>{
        fetchData();
    },[])
  return (
<>
<Container>
<Row xs={2} md={3} lg={4} className="g-4">
      {trendingMovies.map((item, idx) => (
        <Col>
            <Card >
            <Card.Img variant="top" src={process.env.REACT_APP_IMAGE_URL+item.poster_path} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                {item.overview.split(" ").slice(0,20).join(" ")}
                </Card.Text>
                <Button variant="primary" onClick={()=>{
                handleShow(item);
                console.log(item);
            }}>Add to Fav</Button>
            </Card.Body>
            </Card>
        </Col>
      ))}
        <ModalMovie show={show} handleClose={handleClose} item={favMovie}/>
    </Row>
</Container>

</>  )
}
