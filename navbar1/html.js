import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
const { navbar } = require('./set.json');
const html = () => {
const   Brand_Text = (brand) => { return <Navbar.Brand href="#">{brand}</Navbar.Brand>},
        Items = (expand, items) => { return items.map((item) => {
                                        return Array.isArray(item) ?
                                            <NavDropdown title={item[0]} id={`offcanvasNavbarDropdown-expand-${expand}`}>
                                                {item.slice(1).map(i => { return <NavDropdown.Item href={i.href}>{i.name}</NavDropdown.Item> })}
                                            </NavDropdown>
                                            : <Nav.Link href={item.href}>{item.name}</Nav.Link>;

                                        })
                },
        setNav = ({theme_dark, search, expand, brand, items}) => {
            return <Navbar key={expand} className={theme_dark ? 'bg-dark navbar-dark mb-3' : 'mb-3'} expand={expand}>
                    <Container fluid> {Brand_Text(brand)}
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas className={theme_dark ? 'bg-dark text-light' : null } id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>{brand}</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body >
                                <Nav className="justify-content-end flex-grow-1 pe-3"><Nav.Link href="/">Home</Nav.Link>{Items(expand, items)}</Nav>
                                { search ? setSearch() : null }
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
                },
        setSearch = () => {
            return <Form className="d-flex">
                <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                <Button variant="outline-success">Search</Button>
            </Form>
        }

    
    return ( <>{setNav(navbar)} </>);
}

export default html;