import axios from "axios";
import React, { FC, useState } from "react";
import { Alert, Card, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LoginForm from "../components/LoginForm";
import { LoginFormProps } from "../components/LoginForm/LoginForm.types";

export type LoginPageProps = {
  onSuccess: (token: string) => void;
};
const LoginPage: FC<LoginPageProps> = (props) => {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const handleLogin: LoginFormProps["onLogin"] = (values) => {
    axios
      .post("http://localhost:80/auth/login", values)
      .then(({ data }) => {
        props.onSuccess?.(data.token);
        navigate("/kanbanboards");
      })
      .catch(({ error }) => {
        toast.error("Bilgilerinizi kontrol ediniz.");
      });
  };
  return (
    <Row className="pt-5 justify-content-center">
      <Card className="p-3" style={{ width: "22rem" }}>
        <LoginForm onLogin={handleLogin} />
      </Card>
    </Row>
  );
};

export default LoginPage;
