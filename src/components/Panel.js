import React from "react";
import {AiOutlineSetting} from 'react-icons/ai'
import {Badge,ListGroup,Card} from "react-bootstrap"
import style from './style'
// import {GiSolarPower} from 'react-icons/gi'


export const Panel = (props) => {  
  const percentage = props.total * (25/100)
  return (
         
           
  
  
  <Card >
     
    <Card.Body>
    {/* <Figure>
  <Figure.Image style={{width:'100px'}} src={house}/>

</Figure> */}
  
<ListGroup className="list-group-flush" >
  <ListGroup.Item >  
    <h5>{props.title}</h5>
</ListGroup.Item>
  <ListGroup.Item>  
    <span style={style.span}>Wattage:</span><Badge bg="info">{props.total}</Badge>
</ListGroup.Item>
  <ListGroup.Item>  
    <span style={style.span}>Appliance:</span><Badge bg="info">{props.numbers}</Badge>
    {percentage}
</ListGroup.Item>
  
</ListGroup>
<AiOutlineSetting style={{width:'20px', height:'40px',cursor:"pointer",color:"red"}} />
    </Card.Body>
    
  </Card>
  
     
    
     
  
   
  
    
  )};
