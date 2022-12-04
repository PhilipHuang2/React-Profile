import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav'
import { useEffect } from "react";

export default function Header({changePage, page}) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Philip Huang</Navbar.Brand>
        <Nav
      activeKey= {page}
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
        <Nav.Link eventKey={"resume"}>
          Resume
        </Nav.Link>
      </Nav.Item>
    </Nav>
      </Container>
      {/* <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          // onClick={() => handlePageChange('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          // className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
        href="#about"
        // onClick={() => handlePageChange('About')}
        // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
        // className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
      >
        Portfolio
      </a>
      </li>
      <li className="nav-item">
        <a
        href="#blog"
        // onClick={() => handlePageChange('Blog')}
        // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
        // className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
      >
        Contact
      </a>
      </li>
      <li className="nav-item">
        <a
        href="#contact"
        // onClick={() => handlePageChange('Contact')}
        // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
        // className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
      >
        Resume
      </a>
      </li>
    </ul> */}
    </Navbar>
  );
}
