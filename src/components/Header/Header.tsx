import React, { FC } from "react";
import { Navbar, Container, Button } from "react-bootstrap";

export type HeaderProps = {
  onLogout: () => void;
};

const Header: FC<HeaderProps> = (props) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Kanban Board App</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button variant="outline-light" onClick={props.onLogout}>
            Çıkış Yap <i className="fa-solid fa-right-from-bracket"></i>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
