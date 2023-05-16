import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import  Button  from 'react-bootstrap/Button';
import ModalMovie from './ModalMovie';
import UpdateModal from './UpdateModal';
import DeleteModal from './DeleteModal';
export default function Movie(props) {
    const [show,setShow]=useState(false);
    const [showUpFalg,setShowUpFalg]=useState(false);
    const [movieSpec,setMovieSpec]=useState({});
    const [movieFav,setMovieFav]=useState({});
    const [movieDel,setMovieDel]=useState({});
    const [ShowDelete,setShowDelete]=useState(false);
    function  handleShowFlag(item){
    setShowUpFalg(true);
    setMovieFav(item);
    } 
    function  handleShowDelete(item){
    setShowDelete(true);
    setMovieDel(item);
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
    console.log(props.item)
    return (
<>
<Col key={props.idx}>
            <Card >
            <Card.Img variant="top" src={props.item.poster_path?process.env.REACT_APP_IMAGE_URL+props.item.poster_path :props.item.image_path} />
            <Card.Body>
                <Card.Title>{props.item.title}</Card.Title>
                <Card.Text>
                {props.item.description?props.item.description:props.item.overview?props.item.overview.split(" ").slice(0,20).join(" "):''}
                </Card.Text>
                <Button variant="primary" onClick={()=>{
                handleShow(props.item);
                console.log(props.item);
            }}>Add to Fav</Button>
                <Button variant="warning" onClick={()=>{
                handleShowFlag(props.item);
                console.log(props.item);
            }}>Update</Button>
                <Button variant="danger" onClick={()=>{
                    handleShowDelete(props.item)
            }}>Delete</Button>
            </Card.Body>
            </Card>
        </Col>
        <ModalMovie show={show} handleClose={handleClose} item={movieSpec}/>
        <UpdateModal showUpFalg={showUpFalg} handleClose={handleClose} item={movieFav}/> 
        <DeleteModal showFlag={ShowDelete} handleClose={handleClose} item={movieDel}/>
</>  )
}
