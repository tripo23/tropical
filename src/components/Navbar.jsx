import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/css/App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';


function NavbarTropical() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <Navbar.Brand as={Link} to='/'>
            <img
              alt=""
              src='https://res.cloudinary.com/tripo23/image/upload/v1662130213/tropical/logo_wxccs5.webp'
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Tropical
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/category/2'>De Interior</Nav.Link>
            <Nav.Link as={Link} to='/category/3'>De Exterior</Nav.Link>
            <Nav.Link as={Link} to='/category/1'>Árboles</Nav.Link>
          </Nav>
          {/* acá va el shopping cart */}
          <Nav>
            <Nav.Link as={Link} to='/cart'><CartWidget/></Nav.Link>
          </Nav> 
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default NavbarTropical;