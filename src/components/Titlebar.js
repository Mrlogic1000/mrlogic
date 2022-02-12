import React from 'react'
import {TiArrowMaximise,TiArrowMinimise } from "react-icons/ti";
import {AiOutlineClose } from "react-icons/ai";

import {Navbar,Container,Nav,ButtonGroup } from 'react-bootstrap';
const electron = window.require("electron");
const ipcRenderer = electron.ipcRenderer


export const Titlebar = () => {
    return (  
      <Navbar variant='dark' className='dragable' >

      <Container fluid>
        <Navbar.Brand href='#'>Mrlogic</Navbar.Brand>
      {/* <Nav style={{color:"#000"}} className="me-auto">
        <Nav.Link  href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>        
      </Nav> */}
      <ButtonGroup aria-label="Basic example">
      <TiArrowMinimise aria-label="Close"  onClick={()=> ipcRenderer.send('minimize')} className='"btn-close close'/>
      <TiArrowMaximise  onClick={()=> ipcRenderer.send('maximize')} className='"btn-close close'/>
      <AiOutlineClose  onClick={()=> ipcRenderer.send('closed')} className='"btn-close close'/>
        
       </ButtonGroup>

{/* <Button>Click</Button> */}
      </Container>
      </Navbar>
       
      
  




            
       
    )
}
