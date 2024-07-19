// From Dependecies
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function Header() {
    return (
        <Navbar className='navbar'>
            <Container>
                <Navbar.Brand className='navbar-Brand'>
                    Movies 4 Us
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link className='navbar-Link' href='/'>Home</Nav.Link>
                        <Nav.Link className='navbar-Link' href='/movies'>Movies</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}