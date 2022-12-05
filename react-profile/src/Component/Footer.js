import Container from "react-bootstrap/Container";
import GitHub from './images/GitHub.png';
import Medium from './images/medium.webp';
import Linkedin from './images/Linkedin.png';

export default function Footer() {
  return (
    <Container>
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="https://github.com/PhilipHuang2">
              <img src={GitHub} alt="Link to my GitHub Profile"/>
            </a>
          </li>
          <li className="nav-item">
            <a href="https://www.linkedin.com/in/philip-h-6a4b569b/">
              <img src={Linkedin} alt="Link to my LinkedIn Profile"/>
            </a>
          </li>
          <li className="nav-item">
            <a href="https://medium.com/@philiphuang2">
              <img src={Medium} alt="Link to my medium profile"/>
            </a>
          </li>
        </ul>
        <p className="text-center tex-muted">© 2022 Company, Inc</p>
      </footer>
    </Container>
  );
}
