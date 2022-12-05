import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

export default function Header({ changePage, page }) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Philip Huang</Navbar.Brand>
        <Nav
          activeKey={page}
          onSelect={(selectedKey) => changePage(selectedKey)}
        >
          <Nav.Item>
            <Nav.Link eventKey={"aboutMe"}>About Me</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={"portfolio"}>Portfolio</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={"contact"}>Contact Me</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={"resume"}>Resume</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}
