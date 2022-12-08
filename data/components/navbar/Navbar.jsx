import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
const { $navbar } = require('./setup.json');
const _Navbar = () => {
    const setNav = ({ theme, search, search_btn, expand, brand, items }) => {
        return <Navbar expand={expand} bg={theme} variant={theme}>
            <Container fluid> <Navbar.Brand href="#">{brand}</Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
                    <Offcanvas.Header closeButton><Offcanvas.Title>{brand}</Offcanvas.Title></Offcanvas.Header>
                    <Offcanvas.Body >
                        <Nav className="justify-content-end flex-grow-1 pe-3"><Nav.Link href="/">Home</Nav.Link>
                            {items.map((item) => { 
                                return item.hasOwnProperty("drop") ?
                                    <NavDropdown title={item.name}>{item["drop"].map(i => { return <NavDropdown.Item href={i.href}>{i.name}</NavDropdown.Item> })}</NavDropdown>
                                    : <Nav.Link href={item.href}>{item.name}</Nav.Link>;
                            })}</Nav>
                        {search ? 
                            <Form className="d-flex"><Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                                <Button variant="outline-success" className={search_btn === 'hide' ? 'd-none' : ''}>Search</Button>
                            </Form>
                        : null}
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    }
    return (<>{setNav($navbar)} </>);
}

export default _Navbar;