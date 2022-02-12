import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import style from "./style";

function Parameter() {
  return (
    <>
    
      <Container fluid>
      <h3>Parameter</h3>
      
      <Row>
        <Col md={6}>
          <Card>
          <div style={style.marginRound}>
          <h5>Battery Details</h5>
          <div className="input-group input-group-sm mb-3 ">
            <span className="input-group-text" id="basic-addon1">
              Battery Efficiency
            </span>
            <input
              type="number"
              className="form-control"               
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="basic-addon1">
              Depth of Discharge
            </span>
            <input
              type="number"
              class="form-control"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          </div>
          </Card>
        </Col>
        <Col  md={6}>
           <Card>
               <div style={style.marginRound}>
               <h5>Inverter</h5>

               </div>
          
           </Card>
        </Col>

      </Row>
      <Row>
      <Col md={6}>
          <Card>
         <div style={style.marginRound}>
         <h5>Battery Details</h5>
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="basic-addon1">
              Battery Efficiency
            </span>
            <input
              type="number"
              class="form-control"               
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="basic-addon1">
              Depth of Discharge
            </span>
            <input
              type="number"
              class="form-control"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

         </div>
                   </Card>
        </Col>
        <Col  md={6}>
           <Card>
           <h5>Inverter</h5>
           </Card>
        </Col>

      
      </Row>
      </Container>
     
    </>
  );
}

export default Parameter;
