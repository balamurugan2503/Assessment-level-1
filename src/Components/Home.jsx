import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Row, Col } from 'react-bootstrap';
import '../Components/home.css'
import Carousel from 'react-bootstrap/Carousel';


function CollapsibleExample({setFilterList,filterList}) {
  return (
    <>    
    <div className='card-page-wrapper'>
    <Navbar collapseOnSelect expand="sm" className="bg-body-tertiary" style={{marginBottom:"30px"}}>
      <Container>
        <Navbar.Brand className='country_title'>Countries</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          
          <Nav className="ms-auto gap-3">
            <Nav.Link className={filterList==="All"?'Active':'Non-Active'} onClick={()=>setFilterList("All")} >All</Nav.Link>
            <Nav.Link className={filterList==="Asia"?'Active':'Non-Active'} onClick={()=>setFilterList("Asia")}>Asia</Nav.Link>
            <Nav.Link className={filterList==="Europe"?'Active':'Non-Active'} onClick={()=>setFilterList("Europe")}>Europe</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div style={{marginBottom:"30px"}} >
    <Row className='border_relative'>
      <Col xs={5} className='top_border'>
        <div className='line_top'></div>
      </Col>
      <Col xs={2}>
        <h1 className="text-center">WELCOME</h1>
      </Col>
      <Col xs={5} className='bottom_border'>
      <div className='line_top'></div>
      </Col>
    </Row>

    </div>
    <div style={{height:"400px"}}>
      <Row>
        <Col xs={8}>
        <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="w-100"
          src="/Capture.PNG"
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100"
           src="/Capture.PNG"
          alt="Second slide"
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100"
          src="/Capture.PNG"
          alt="Third slide"
        />
      
      </Carousel.Item>
    </Carousel>
        </Col>
        <Col xs={4}>
          
          <div>
        <img
        style={{height: "385px",width:"100%"}}
           src="/Capture-1.PNG"
          alt="Second slide"
        />

        </div>
       
        </Col>
      </Row>
    </div>
    
</div>

 {/* <CardComp /> */}
 </>

  );
}

export default CollapsibleExample;