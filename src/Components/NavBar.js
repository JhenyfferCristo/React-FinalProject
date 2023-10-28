import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useUserContext } from "./context/UserProvider";

export function NavBar() {
  const {isUserLoggedIn, logoutUser} = useUserContext()
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <img 
            src="/res/logo.png"
            width="130"
            height="50"
            className="d-inline-block align-top"
            alt="Bow Valley College logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/signup">Apply Now</Nav.Link>
            {isUserLoggedIn() ? <Nav.Link onClick={logoutUser}>Logout</Nav.Link> : <Nav.Link href="/login">Login</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
