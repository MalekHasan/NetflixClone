import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from "axios";
export default function UpdateModal(props) {
    const [favArrMovies,setFavArrMovies]=useState([]);
    async function handleSubmit(e){
        e.preventDefault();
        const obj={
            title: e.target.title.value ,
            image_path: e.target.image_path.value ,
            runtime: e.target.time.value ,
            actors: e.target.actors.value ,
            plot: e.target.description.value ,
            imdbrating: e.target.imdbRating.value 
            }
        const result= await axios.put(`${process.env.REACT_APP_SERVER_URL}update/${props.id}`,obj);
        props.refMovies(result.data);
        props.handleClose();
        }
    return (
    <>
        <Modal show={props.showUpFalg} onHide={props.handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form  onSubmit={handleSubmit}>
    <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label>Title</Form.Label>
            <Form.Control
            type="text" name="title"
            defaultValue={props.item.title}
            /> 
            
        </Form.Group>
        <Form.Group as={Col} md="12" controlId="validationCustom02">
            <Form.Label>Description</Form.Label>
            <Form.Control
            type="text" name="description"
            defaultValue={props.item.description} 
            />
        </Form.Group>
        <Form.Group as={Col} md="12" controlId="validationCustom02">
            <Form.Label>Image_path</Form.Label>
            <Form.Control
            type="text" name="image_path"
            defaultValue={props.item.image_path} 
            />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label>Time</Form.Label>
            <Form.Control type="text" name="time"  defaultValue={props.item.time} />

        </Form.Group>
        <Form.Group as={Col} md="12" controlId="validationCustom04">
            <Form.Label>Actors</Form.Label>
            <Form.Control type="text" name="actors"  defaultValue={props.item.actors} />

        </Form.Group>
        <Form.Group as={Col} md="12" controlId="validationCustom05">
            <Form.Label>Imdb Rating</Form.Label>
            <Form.Control type="text" name="imdbRating"  defaultValue={props.item.imdbRating} />
        </Form.Group>
      </Row>
      <Button type="submit" variant="primary">
            Save Changes
            </Button>
    </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
            Close
            </Button>

        </Modal.Footer>
        </Modal>
    </>
    );
}
