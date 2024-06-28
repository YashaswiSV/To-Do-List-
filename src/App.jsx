
// ==================================================================

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Carousel from 'react-bootstrap/Carousel';


import Card from 'react-bootstrap/Card';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Image from 'react-bootstrap/Image';


const App=()=>{
  return(
    <>
          <Navbar expand="lg" className="bg-body-dark" bg="light">
      <Container fluid>
        <Navbar.Brand href="#"><img src="public/logo/l4.png" alt="" width="50px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    <Carousel>
      <Carousel.Item>

         <img src="public/1.jpg" alt="" width="100%"  height="600px"/>    
  
        <Carousel.Caption>
          <h3 >Feel like new home</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>

      <img src="public/2.jpg" alt=""  width="100%"  height="600px" />
        <Carousel.Caption>
          <h3>Design your way</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="public/4.jpg" alt=""  width="100%"  height="600px" />
        <Carousel.Caption>
          <h3>Customize your home</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src="public/10.jpg" alt=""  width="100%"  height="600px" />
        <Carousel.Caption>
          <h3  >Sweet home</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
{/* { ------------------------------------------------------------------------------------------------------  */}

    <Container>
    <Row className='my-5'>
        <Col >
        <Card style={{ width: '18rem' }}>
          <img src="public/m4.avif" alt="" width="300px" height="200px"/>
<Card.Body>
  <Card.Title>Card Title</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
  </Card.Text>
  <Button variant="primary">Go somewhere</Button>
</Card.Body>
</Card>
          
        </Col>
        <Col>
        <Card style={{ width: '18rem'  }}>
        <img src="public/m5.avif" alt="" width="300px" height="200px"/>

<Card.Body>
  <Card.Title>Card Title</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
  </Card.Text>
  <Button variant="primary">Go somewhere</Button>
</Card.Body>
</Card>
        </Col>

        <Col>
        <Card style={{ width: '18rem' }}>
        <img src="public/m6.avif" alt="" width="300px"  />

<Card.Body>
  <Card.Title>Card Title</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
  </Card.Text>
  <Button variant="primary">Go somewhere</Button>
</Card.Body>
</Card>
        </Col>
      </Row>
      
      <h1 style={{textAlign:"center ", margin:"30px"}}>Explore new designs</h1>
      </Container>
       {/* ------------------------------------------------------------------------------------------------  */}
      <div bg="red" >
        <Container>
        <Row>

         <Col className='my-4 '>
         <Image src="public/interior d/d5.avif" fluid width="350px"/> 
         </Col>

         <Col>
              <h3 style={{marginTop:"100px",paddingBottom:"30px",fontFamily:"cursive"}}>Thoughtful & Functional</h3>
              <p style={{fontSize:"18px"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi voluptas voluptates quibusdam esse incidunt distinctio doloribus numquam nulla quisquam, sint quia nesciunt, consectetur totam reiciendis, minus eos quidem asperiores deserunt!</p>
              <Button variant="primary">Explore</Button>
        </Col>
        


        </Row>
        <h1 style={{textAlign:"center",marginTop:"40px",paddingBottom:"40px"}}>Catogories </h1>
        <Row>
              <Col>
                  <img src="public/interior d/dd3.jpg" alt="" width="300px"/>
                 

              </Col>
             

              <Col>
              <img src="public/interior d/dd9.webp" alt="" width="300px"/>
                  
              </Col>

              <Col>
                  <img src="public/interior d/dd10.webp" alt="" width="300px"/>
                   
              </Col>
             </Row>
             <Row className='my-3'>
              <Col>
                  <img src="public/interior d/dd7.jpg" alt="" width="300px"/>
                      
              </Col>

              
              <Col>
                  <img src="public/interior d/dd6.jpg" alt="" width="300px" height="200px"/>
                   
              </Col>

              <Col>
                  <img src="public/interior d/dd4.jpg" alt="" width="300px"/>
                      
              </Col>
         </Row>
        </Container>
      </div>
            
      <div style={{textAlign:"center",marginTop:"60px",paddingBottom:"60px"}}>
         <h1 style={{marginTop:"60px",paddingBottom:"60px"}}>Connect with us</h1>
        <img src="public/bg/3.png" alt="" width="100%" height={"600px"}/>
      </div>

   
    </>


    

  )
}
export default App;

// ===================================================28 June====================================================

