import React, { FC } from "react";
import { Navbar, Nav, Container, NavDropdown, Figure } from "react-bootstrap";

export type HeaderProps = {
  onLogout: () => void;
};

const Header: FC<HeaderProps> = (props) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Kanban App</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="{username}"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#">Profil</NavDropdown.Item>
              <NavDropdown.Item href="#">Ayarlar</NavDropdown.Item>
              <NavDropdown.Item href="#">Yardım</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={props.onLogout}>
                Çıkış Yap
              </NavDropdown.Item>
            </NavDropdown>
            <Figure.Image
              width={35}
              height={35}
              className="rounded-circle mx-2"
              src="https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png"
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
