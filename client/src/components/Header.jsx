// From Dependecies
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function Header() {
    return(
        <div>
            <Navbar className='navbar' >
                <Container>
                    <Navbar.Brand className='navbar_Brand' >
                        Movies 4 Us
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse>
                        <Nav>
                            <Nav.Link className='navbar_Link' href='/'>Home</Nav.Link>
                            <Nav.Link className='navbar_Link' href='/movies'>Movies</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}