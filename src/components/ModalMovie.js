import  axios  from 'axios';
import React from 'react'
import  {Image}  from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ModalMovie(props) {
const saveData = async (item)=>{
    let obj= {
      title: item.title,
      image_path:process.env.REACT_APP_IMAGE_URL+item.poster_path,
      runtime:item.vote_count,
      actors:item.media_type,
      gener:item.media_type,
      plot:item.overview,
      imdbRating:item.vote_count
    };
    const url=await axios.post(process.env.REACT_APP_SERVER_URL+'movie',obj);
    props.handleClose();

  }
  return (
<>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.item.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Image src={process.env.REACT_APP_IMAGE_URL+props.item.poster_path} className='w-100'/>
          {props.item.overview}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{
            saveData(props.item)
          }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
</>  )
}
