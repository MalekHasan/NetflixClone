import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function DeleteModal(props) {
    async function handleDelete(){
        const result= await axios.delete(`${process.env.REACT_APP_SERVER_URL}delete/${props.item.id}`);
        props.refMovies(result.data);
        props.handleClose();
        }
  return (
<>

<Modal show={props.showFlag} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Delete 
          </Button>
        </Modal.Footer>
      </Modal>
</>  )
}
