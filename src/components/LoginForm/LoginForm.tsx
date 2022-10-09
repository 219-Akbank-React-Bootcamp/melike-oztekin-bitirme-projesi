import React, { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Row, Form, FloatingLabel, Alert } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { LoginFormProps, LoginFormValuesProps } from "./LoginForm.types";

const LoginForm: FC<LoginFormProps> = (props) => {
  const [formValues, setFormValues] = useState<LoginFormValuesProps>({
    username: "",
    password: "",
  });

  function handleChange(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  }

  const handleSubmit = () => {
    props.onLogin?.(formValues);
    console.log(formValues);
  };

  const [show, setShow] = useState(true);
  return (
    <>
      <Row className="justify-content-center text-center my-3">
        <div className="icon_box justify-content-center mb-3">
          <i className="fa-regular fa-user"></i>
        </div>
        <h4>Kanban App</h4>
        <h6>Giriş Formu</h6>
      </Row>
      <Row>
        <Form>
          <FloatingLabel
            controlId="floatingUsername"
            label="Kullanıcı adı"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Kullanıcı adı"
              onChange={handleChange}
              name="username"
              value={formValues["username"]}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingPassword"
            label="Şifre"
            className="mb-3"
          >
            <Form.Control
              type="password"
              placeholder="Şifre"
              onChange={handleChange}
              name="password"
              value={formValues["password"]}
            />
          </FloatingLabel>
          <Button className="w-100 mb-3" variant="dark" onClick={handleSubmit}>
            Giriş Yap
          </Button>
        </Form>
      </Row>
      <Row className="text-center mb-3">
        <small>
          Hesabın yok mu? <Link to="/register">Kayıt Ol!</Link>
        </small>
      </Row>
      <Row>
        <Alert variant="danger" show={false}>
          Bilgilerinizi konrtol ediniz.
        </Alert>
      </Row>
      <Row>
        <Link to="/kanbanboards">kanban boarda git</Link>
      </Row>
    </>
  );
};

export default LoginForm;
