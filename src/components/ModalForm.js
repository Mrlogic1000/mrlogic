
import React,{useRef} from "react";
import { Button,Modal,Form} from "react-bootstrap";
import axios from "axios";
export const  ModalForm=(props)=> {

    const nameInputRef = useRef()
    const quantityInputRef = useRef()
    const wattageInputRef = useRef()


    const saveLoad = (event)=>{
        event.preventDefault();
        const name = nameInputRef.current.value;
        const quantity = quantityInputRef.current.value;
        const wattage = wattageInputRef.current.value;
        let data = {name,quantity,wattage}       
        axios.post('http://localhost:4000/load',data).then((res)=>{
            
        })  
             

    }
   
    return (
      <>
       
      
        {/* <Button variant="primary" >
          Launch demo modal
        </Button> */}
  
        <Modal show={props.show} onHide={props.handleClose}>
          <Modal.Header bg="dark" closeButton>
            <Modal.Title>Edit Load</Modal.Title>
            
          </Modal.Header>
          <Form onSubmit={saveLoad}>
          <Modal.Body>
 
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control  type="text" placeholder="Enter name" ref={nameInputRef}/>    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Quantity</Form.Label>
    <Form.Control  type="text" placeholder="Enter name" ref={quantityInputRef}/>    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Wattage</Form.Label>
    <Form.Control type="text" placeholder="Enter name" ref={wattageInputRef}/>    
  </Form.Group>
 

          </Modal.Body>



          <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary" onClick={props.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
          </Form>
        </Modal>
      </>
    );
  }
  
 