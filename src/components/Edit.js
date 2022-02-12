import React from 'react'
// import { ParameterContext } from './ParameterContext';
// import { useNavigate } from 'react-router-dom';
import { Button,Form,Container,CloseButton,Navbar} from 'react-bootstrap';
import axios from "axios";
import { useState} from 'react';
const electron = window.require("electron");
const ipcRenderer = electron.ipcRenderer

export const Edit = () => {
//  const {parameters} = useContext(ParameterContext) 
//  const [count,setCount] = useState([])
 
    const [name, setName] = useState('')    
    const [id, setId] = useState(0)    
    const [quantity, setQuantity] = useState(0)    
    const [wattage, setWattage] = useState(0)    
        ipcRenderer.on('data',(event,arg)=>{                     
            setId(arg.id)
            setName(arg.name)
            setQuantity(arg.quantity)
            setWattage(arg.wattage)
            
            
        })
const editLoad = (event)=>{
        event.preventDefault();       
        let data = {id,name,quantity,wattage}             
        axios.post('http://localhost:4000/update',data).then((res)=>{
                       
        })         
        
         ipcRenderer.send('close-edit');
    }
    
    
    return (
        
   
        <>    
    <Navbar bg="dark" variant='dark' className='dragable'>
    <Container>
      <Navbar.Brand>Edit Load</Navbar.Brand>
      <CloseButton 
      variant='white' 
      className="close" 
      onClick={()=> ipcRenderer.send('close-edit')} />

    </Container>
  </Navbar>
   <Container>            
           
<Form onSubmit={editLoad}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control value={name}  type="text" placeholder="Enter name" onChange={(e)=>{setName(e.target.value)}}/>    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Quantity</Form.Label>
    <Form.Control value={quantity}  type="text" placeholder="Enter name" onChange={(e)=>{setQuantity(e.target.value)}}/>    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Wattage</Form.Label>
    <Form.Control value={wattage}  type="text" placeholder="Enter name" onChange={(e)=>{setWattage(e.target.value)}}/>    
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>          

        </Container>
        </>
    )
}
