import React from 'react'
import  {Image}  from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ModalMovieDetailes(props) {
  return (
<>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.item.title}</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
        <Image src={props.item.image_path} className='w-100'/>
          {props.item.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
</>  )
}
