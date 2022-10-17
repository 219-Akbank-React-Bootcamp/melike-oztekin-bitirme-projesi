import React, { useState, useEffect } from "react";
import { Card, Modal } from "react-bootstrap";
import EditBoardForm from "./EditBoardForm";
import service from "../../services/instance";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";

const BoardListItem = (props: any) => {
  //const [newBoardList, setNewBoardList] = useState([] as any[]);
  const [editBoardModal, setEditBoardModal] = useState(false);
  const handleEditBoardModalClose = () => setEditBoardModal(false);
  const handleEditBoardModalShow = () => {
    setEditBoardModal(true);
  };

  const deleteBoardListItem = () => {
    if (window.confirm("Silmek istediğine emin misin?")) {
      let token = localStorage.getItem("token");
      let userId = 0;
      if (token !== null) {
        let decode: any = jwt_decode(token);
        userId = decode.id;
      }
      service
        .delete("board/" + `${props.board.id}`, {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        })
        .then((response) => {
          // service.get("board", {
          //   headers: {
          //     Authorization: "Bearer " + localStorage.getItem("token"),
          //   },
          // });
          // let data = response.data.filter((x: any) => x.ownerId == userId);
          toast.success("Board silindi.");
          // setNewBoardList(data);
          // console.log(data);
        })
        .catch(() => {
          toast.error("Bir hata oluştu.");
        });
    }
  };

  return (
    <div>
      <Card className="justify-content-center" style={{ width: "14rem" }}>
        <Card.Body className="card_body p-4">
          <div className="card_icon_div">
            <i className="fa-solid fa-person-chalkboard"></i>
          </div>
          <Card.Title>{props.board.title}</Card.Title>
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
            onClick={() => deleteBoardListItem()}
          >
            Sil
          </Card.Link>
        </Card.Footer>
      </Card>

      <Modal show={editBoardModal} onHide={handleEditBoardModalClose}>
        <EditBoardForm />
      </Modal>
    </div>
  );
};

export default BoardListItem;
