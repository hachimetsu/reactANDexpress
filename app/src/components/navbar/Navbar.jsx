import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const { navbar } = require('./setup.json');

const _Navbar = (e) => {
    e = e ? e : navbar;
    const setNav = ({ theme_dark, expand, brand, items, login, extra }) => {
        return <Navbar collapseOnSelect expand={expand} className={theme_dark ? 'navbar-dark bg-dark' : 'navbar-dark bg-primary'}>
            <Container fluid>
                <Navbar.Brand href="#home">{brand}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {items.map((item) => {
                            return Array.isArray(item) ?
                                <NavDropdown title={item[0]} id="collasible-nav-dropdown">
                                    {item.slice(1).map(i => { return <><NavDropdown.Divider /> <NavDropdown.Item href={i.href}>{i.name}</NavDropdown.Item></> })}
                                </NavDropdown>
                                : <Nav.Link href={item.href}>{item.name}</Nav.Link>;
                        })}
                    </Nav>
                    <Nav>
                        {login ? <Nav.Link href="/login">Login</Nav.Link> : null}
                        {extra.name && extra.href ? <Nav.Link eventKey={2} href={extra.href}>{extra.name}</Nav.Link> : null}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    };
    return (<>{setNav(e)}</>);
}

export default _Navbar;