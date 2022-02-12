import React from 'react'
import {Badge,ListGroup,Card} from "react-bootstrap"
import {MdAddTask} from 'react-icons/md'
const electron = window.require("electron");
const ipcRenderer = electron.ipcRenderer


export const LoadPanel = (props) => {
    return (
        <Card>
        <ListGroup className="list-group-flush" >
       <ListGroup.Item  >  
       
             <h5 className='p-2 bd-highlight'>{props.title}
             <MdAddTask style={{paddingLeft:"10px",color:"red", width:"40px",height:"40px",cursor:"pointer"}} onClick={()=> ipcRenderer.send('open-load')}/>
             </h5>
     </ListGroup.Item>
       <ListGroup.Item>  
         <span style={{paddingRight:"10px"}}>Total Wattage:</span><Badge bg="info">{props.total}</Badge>
     </ListGroup.Item>
       <ListGroup.Item>  
         <span style={{paddingRight:"10px"}}>Numer of Appliance:</span><Badge bg="info">{props.numbers}</Badge>
     </ListGroup.Item>
       
     </ListGroup>
        </Card>
    )
}
