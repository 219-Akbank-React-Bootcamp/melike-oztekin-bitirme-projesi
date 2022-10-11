import React, { FC, useState } from "react";
import { Row, Col, Card, Button, Modal, Form } from "react-bootstrap";
import "./style.css";

const KanbanBoards = () => {
  const [editBoardModal, setEditBoardModal] = useState(false);
  const handleEditBoardModalClose = () => setEditBoardModal(false);
  const handleEditBoardModalShow = () => {
    setEditBoardModal(true);
  };

  const [addBoardModal, setAddBoardModal] = useState(false);
  const handleAddBoardModalClose = () => setAddBoardModal(false);
  const handleAddBoardModalShow = () => {
    setAddBoardModal(true);
  };
  return (
    <div className="m-3 text-center">
      <h3 className="mb-3">Bir Liste Seç</h3>
      <Row className="justify-content-center">
        <Card
          className="text-center px-0 m-2 justify-content-center"
          style={{ width: "14rem" }}
        >
          <Card.Body
            className="card-body p-5"
            onClick={() => handleAddBoardModalShow()}
          >
            <i className="card_icon_div fa-solid fa-plus"></i>
            <Card.Title>Yeni Ekle</Card.Title>
          </Card.Body>
        </Card>
        <Card
          className="text-center p-0 m-2 justify-content-center"
          style={{ width: "14rem" }}
        >
          <Card.Body className="card-body p-4">
            <i className="card_icon_div fa-solid fa-person-chalkboard"></i>
            <Card.Title>listname</Card.Title>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-between">
            <Card.Link
              href="#"
              style={{
                color: "green",
                textDecoration: "none",
                fontSize: "16px",
              }}
              onClick={() => handleEditBoardModalShow()}
            >
              Düzenle
            </Card.Link>
            <Card.Link
              href="#"
              style={{
                color: "orange",
                textDecoration: "none",
                fontSize: "16px",
              }}
            >
              Sil
            </Card.Link>
          </Card.Footer>
        </Card>
      </Row>
      <Modal show={editBoardModal} onHide={handleEditBoardModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Board Düzenle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="mb-5">
            <Form.Group className="mb-3" controlId="formCategory">
              <Form.Label>Board Adı </Form.Label>
              <Form.Control type="text" placeholder="kategori adı giriniz..." />
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
      </Modal>
      <Modal show={addBoardModal} onHide={handleAddBoardModalClose}>
        <Modal.Header>
          <Modal.Title>Yeni Durum Ekle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formStatus">
              <Form.Label>Durum </Form.Label>
              <Form.Control
                type="text"
                placeholder="durum bilgisi giriniz..."
              />
            </Form.Group>
            <Button
              variant="outline-dark"
              style={{ width: "100%" }}
              type="button"
            >
              Ekle
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default KanbanBoards;
