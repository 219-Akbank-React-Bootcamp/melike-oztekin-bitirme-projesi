import React from "react";
import { Button, Modal, Form } from "react-bootstrap";

const EditBoardForm = () => {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Board Düzenle</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="">
          <Form.Group className="mb-3" controlId="formBoard">
            <Form.Label>Board Adı </Form.Label>
            <Form.Control type="text" placeholder="Board adı giriniz..." />
          </Form.Group>
          <Button
            variant="outline-dark"
            style={{ width: "100%" }}
            type="button"
          >
            Kaydet
          </Button>
        </Form>
      </Modal.Body>
    </>
  );
};

export default EditBoardForm;
