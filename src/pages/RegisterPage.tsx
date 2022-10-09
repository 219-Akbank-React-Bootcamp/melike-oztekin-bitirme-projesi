import React from "react";
import { Card, Row } from "react-bootstrap";
import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {
  return (
    <Row className="pt-5 justify-content-center">
      <Card className="p-3" style={{ width: "22rem" }}>
        <RegisterForm />
      </Card>
    </Row>
  );
};

export default RegisterPage;
