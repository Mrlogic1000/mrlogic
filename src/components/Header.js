import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';


export const Header = () => {
    return (
    <header id='header'>
   
        <Container fluid >
            <Row>
                <Col md={10}><h1>Dashboarad 
                    <small className="text-muted">Manage your site</small></h1></Col>
            </Row>
        </Container>

   
    
    </header>
    )
}
