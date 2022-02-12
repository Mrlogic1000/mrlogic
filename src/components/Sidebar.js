import React from 'react'
import { NavData } from './custom'
import {ListGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';
// const electron = window.require("electron");
// const ipcRenderer = electron.ipcRenderer




export const Sidebar = () => {
    return (
       <nav >
          
          <ListGroup as="ul">
          {
              NavData.map((item, i)=>{
                 return  (
                
                
                <ListGroup.Item as="li" key={i}>
                 <Link to={item.route}><span>{item.icon}</span> {item.title}</Link>
                </ListGroup.Item>                
              
                   
                   )
                 
              })
          }
         
        </ListGroup>
       </nav>
    )
}
