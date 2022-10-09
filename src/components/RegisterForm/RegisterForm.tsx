import React from "react";
import { Link } from "react-router-dom";
import { Row, Form, FloatingLabel } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const RegisterForm = () => {
  return (
    <>
      <Row className="justify-content-center text-center my-3">
        <div className="icon_box justify-content-center mb-3">
          <i className="fa-solid fa-user-plus"></i>
        </div>
        <h4>Kanban App</h4>
        <h6>Kayıt Formu</h6>
      </Row>
      <Row>
        <Form>
          <FloatingLabel
            controlId="floatingUsername"
            label="Kullanıcı adı"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Kullanıcı adı" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingPassword"
            label="Şifre"
            className="mb-3"
          >
            <Form.Control type="password" placeholder="Şifre" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingPasswordConfirm"
            label="Şifre Tekrar"
            className="mb-3"
          >
            <Form.Control type="password" placeholder="Şifre Tekrar" />
          </FloatingLabel>
          <Button className="w-100 mb-3" variant="dark" type="submit">
            Kayıt Ol
          </Button>
        </Form>
      </Row>
      <Row className="text-center mb-3">
        <small>
          Zaten bir hesabım var mı? <Link to="/login">Giriş Yap!</Link>
        </small>
      </Row>
    </>
  );
};

export default RegisterForm;
