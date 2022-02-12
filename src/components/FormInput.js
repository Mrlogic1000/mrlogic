import React from 'react'
import { Button,Form,Container,CloseButton,Navbar} from 'react-bootstrap';
import { useRef} from 'react';
import axios from "axios";
// import { ParameterContext } from "./ParameterContext";

const electron = window.require("electron");
const ipcRenderer = electron.ipcRenderer


export const FormInput = () => {
  // const {parameters} = useContext(ParameterContext)
  
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
        ipcRenderer.send('close')      

    }
    
    return (
        <>
            
            
    <Navbar bg="dark" variant='dark' className='dragable'>
    <Container fluid>
      <Navbar.Brand>Edit Load</Navbar.Brand>
      <CloseButton variant='white' onClick={()=> ipcRenderer.send('close')} className='close' />

    </Container>
  </Navbar>
           
<Container>
<Form onSubmit={saveLoad}>
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
  
  <Button  type="submit">
    Submit
  </Button>
</Form>          

</Container>
        </>
    )
}
