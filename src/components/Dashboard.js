import React,{useContext} from 'react'
import { ParameterContext } from "./ParameterContext";
import {Panel} from './Panel'
import {Inverter} from './Inverter'
import {Battery} from './Battery'
import {LoadPanel} from './LoadPanel'
import {CardGroup} from "react-bootstrap"
import inverter from '../images/inverter.png' 
import solar2 from '../images/solar2.png' 
import control from '../images/control.png' 


export const Dashboard = () => {
    const {parameters} = useContext(ParameterContext)
const numbers = parameters.length
const total = parameters.reduce((current,parameter)=>{
  return current + parameter.wattage
},0)

    return (
        <>
        <LoadPanel numbers={numbers} total={total} title="Load Analysis"/>       
  
    
           <CardGroup>
           <Inverter total={total}
            image={inverter} title="Inverters" numbers={numbers}/>
            <Battery total={total}/>
            <Panel image={control} total={total} title="Controller"/>
            <Panel image={solar2} total={total} title="Solar Panel"/>
           </CardGroup>
          
            {/* <Row>
            
            <Col><Panel total={total} title="Charging Controller"/></Col>
            <Col><Panel total={total} title="Charging Controller"/></Col>
    </Row> */}
    
     
   
   
        </>
    )
}
