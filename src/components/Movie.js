import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import  Button  from 'react-bootstrap/Button';
import UpdateModal from './UpdateModal';
import DeleteModal from './DeleteModal';
import ModalMovieDetailes from './ModalMovieDetailes';
export default function Movie(props) {
    const [show,setShow]=useState(false);
    const [showUpFalg,setShowUpFalg]=useState(false);
    const [ShowDelete,setShowDelete]=useState(false);
    const [movieSpec,setMovieSpec]=useState({});
    const [movieFav,setMovieFav]=useState({});
    const [movieDel,setMovieDel]=useState({});
    function hanldleChildMovies(arr){
        props.refMovies(arr);
        }
    function  handleShow(item){
    setShow(true)
    setMovieSpec(item)
    } 
    function  handleClose(){
    setShow(false);
    setShowUpFalg(false);
    setShowDelete(false);

    }
    function  handleShowFlag(item){
    setShowUpFalg(true);
    setMovieFav(item);
    } 
    function  handleShowDelete(item){
    setShowDelete(true);
    setMovieDel(item);
    } 
    return (
<>
<Col key={props.idx}>
            <Card >
            <Card.Img variant="top" src={props.item.image_path} />
            <Card.Body>
                <Card.Title>{props.item.title}</Card.Title>
                <Card.Text>
                {props.item.description}
                </Card.Text>
                <Button variant="primary" onClick={()=>{
                handleShow(props.item);
                console.log(props.item);
            }}>More</Button>
                <Button variant="warning" className='m-2' onClick={()=>{
                handleShowFlag(props.item);
            }}>Update</Button>
                <Button variant="danger" className='m-2' onClick={()=>{
                    handleShowDelete(props.item)
            }}>Delete</Button>
            </Card.Body>
            </Card>
        </Col>
        <ModalMovieDetailes show={show} handleClose={handleClose} item={movieSpec}/>
        <UpdateModal showUpFalg={showUpFalg} handleClose={handleClose} item={movieFav} id={movieFav.id} refMovies={hanldleChildMovies}/> 
        <DeleteModal showFlag={ShowDelete} handleClose={handleClose} item={movieDel}  refMovies={hanldleChildMovies}/>
</>  )
}
