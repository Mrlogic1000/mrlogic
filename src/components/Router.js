import React from 'react'
// import  {Navbar } from "./Navbar";
import { Titlebar } from './Titlebar';
import {Menubar} from './Menubar'
import { Routes, Route } from 'react-router-dom';
// import { Header } from './Header';
// import { Panel } from './Panel';
import { Sidebar } from './Sidebar';
import {Container,Row,Col} from 'react-bootstrap';
import { Dashboard } from './Dashboard';
import { Home } from './Home';
import Parameter from './Parameter';




 export const Router = () => {
    return (
       
      <>
       
      
        <Titlebar/>
      
        <Container fluid>
        <Menubar/>
        </Container>
        <Container fluid>
      <Row>
      
     <Col md={2}>
        <Sidebar/>
        </Col>
      <Col>
     
   <Routes>
      <Route path="/" element={<Dashboard/>}/>       
      <Route path="/data" element={<Home/>} />   
      <Route path="/parameter" element={<Parameter/>} />   
      <Route path="setting" />
      
    </Routes>       
      </Col>
      </Row>
      </Container>

      </>

  
            
        
    )
}
