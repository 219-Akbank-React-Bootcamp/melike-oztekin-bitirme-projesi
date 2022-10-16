import React, { useState, useEffect } from "react";
import { Row, Card, Button, Modal, Form } from "react-bootstrap";
import AddBoardForm from "./AddBoardForm";
import EditBoardForm from "./EditBoardForm";
import { toast } from "react-toastify";
import "./style.css";
import { BoardListAddProps } from "./BoardList.types";
import service from "../../services/instance";

const BoardList = () => {
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

  const handleBoardListAdd: BoardListAddProps["onBoardListAdd"] = (values) => {
    service
      .post("board", values)
      .then(() => {
        toast.success("Yeni board ekleme başarılı.");
      })
      .catch((error) => {
        toast.error("bir hata oluştu");
      });
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
        {/* <Card
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
        </Card> */}
      </Row>
      <Modal show={editBoardModal} onHide={handleEditBoardModalClose}>
        <EditBoardForm />
      </Modal>
      <Modal show={addBoardModal} onHide={handleAddBoardModalClose}>
        <AddBoardForm onBoardListAdd={handleBoardListAdd} />
      </Modal>
    </div>
  );
};

export default BoardList;
