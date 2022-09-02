import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

function NavbarTropical() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <Navbar.Brand href="#home">
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
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Plantas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Accesorios
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Tips de cuidado</Nav.Link>
          </Nav>
          {/* acá va el shopping cart */}
          <Nav>
            <CartWidget/>
          </Nav> 
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default NavbarTropical;