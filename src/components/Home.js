import axios from "axios";
import { DataTable } from './DataTable';
import { useState } from "react";
import {MdOutlineAddTask} from "react-icons/md"
import {Container,Navbar,ButtonGroup} from "react-bootstrap"
import { ModalForm } from "./ModalForm";


const electron = window.require("electron");
const ipcRenderer = electron.ipcRenderer;



export const Home = () => {  

  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    let sum = 0;   
    
    
    

    const deleteLoad = (id) => {
      let data = { id };
      axios.post("http://localhost:4000/delete", data).then((res) => {
        console.log(res.data)
      });
    };
    const sendData = (id, name, quantity, wattage) => {
      let data = { id: id, name: name, quantity: quantity, wattage: wattage };
      ipcRenderer.send("open-edit", data);
    };
  
  
  
    return (
        <>
          
          
<Navbar variant='dark'>

<Container fluid>
   {/* <MdOutlineAddTask  
   onClick={()=>{  ipcRenderer.send("open") }} 
   style={{color:'white',width:'30px',height:'30px',cursor:'pointer'}}/> */}
   <MdOutlineAddTask  
   onClick={handleShow} 
   style={{color:'white',width:'30px',height:'30px',cursor:'pointer'}}/>

<ModalForm show={show} handleClose={handleClose}  handleShow={handleShow}/>
<ButtonGroup aria-label="Basic example">

{/* <AiOutlineClose  onClick={()=> ipcRenderer.send('close-load')} className='"btn-close close'/> */}
  
 </ButtonGroup>

{/* <Button>Click</Button> */}
</Container>
</Navbar>

 
  {  <DataTable 
   sum={sum} sendData={sendData} deleteData={deleteLoad}/>}
 
  
   



            
           
            </>
           

       
    )
}
