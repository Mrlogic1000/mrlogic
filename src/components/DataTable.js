import React,{ useContext } from 'react'
import { ParameterContext } from './ParameterContext';
import { header } from "./tableheader";
import { AiOutlineDelete, AiOutlineEdit} from "react-icons/ai";
import { Table } from 'react-bootstrap';


export const DataTable = (props) => {
 
  const {parameters} = useContext(ParameterContext)   
    
    return (
      
          <Table  striped bordered hover responsive caption="top">
            
         <thead>
           <tr >
             {header.map((th, id) => {
               return (
                 <th className='table-fixed' style={{ display: th === "id" ? "none" : "", }} key={id}>
                   {th.title}
                 </th>
               );
             })}
           </tr>
         </thead>
         <tbody>
           {parameters.map((th, id) => {
             return (
             
               (
                 <tr key={id}>
                   
                   <td>{id}</td>
                   <td>{th.name}</td>
                   <td>{th.quantity}</td>
                   <td>{th.wattage}</td>
                   <td>{Number(th.quantity) * Number(th.wattage)}</td>
                   <td>
                     {/* send data to the main window */}
                     <AiOutlineEdit
                       onClick={() => {
                         props.sendData(th.id, th.name, th.quantity, th.wattage);
                       }}
                       className="button"
                     />
                     &nbsp;&nbsp;&nbsp;
                     <AiOutlineDelete
                       onClick={() => {
                         props.deleteData(th.id);
                       }}
                       className="btn-danger"
                     />
                   </td>
                 </tr>
               )
             );
           })}
         </tbody>       
       </Table>
       
    )
}
