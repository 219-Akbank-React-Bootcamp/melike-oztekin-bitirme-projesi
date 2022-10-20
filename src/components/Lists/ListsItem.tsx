import React from "react";
import { Card } from "react-bootstrap";

const ListsItem = (props: any) => {
  return (
    <Card
      className="mb-2 p-0"
      style={{
        borderRadius: "20px",
        backgroundColor: "#f1f1f1",
      }}
    >
      <Card.Body>
        <div className="d-flex justify-content-between mb-2">
          <div>
            <strong>{props.list.title}</strong>
          </div>
          <div>
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
        {/* <Card
          className="p-0 mb-2"
          style={{
            fontSize: "14px",
            borderRadius: "10px",
          }}
        >
          <Card.Body>Kart adı</Card.Body>
          <Card.Footer
            className="d-flex justify-content-between"
            style={{ backgroundColor: "#fff", borderRadius: "0 0 20px 20px" }}
          >
            <div>
              <i className="fa-regular fa-eye"></i>
            </div>
            <div>
              <i className="fa-solid fa-paperclip"></i>&nbsp;0
            </div>
          </Card.Footer>
        </Card>
        <Card
          className="p-0"
          style={{
            fontSize: "14px",
            borderRadius: "10px",
          }}
        >
          <Card.Body>Kart adı</Card.Body>
          <Card.Footer
            className="d-flex justify-content-between"
            style={{ backgroundColor: "#fff", borderRadius: "0 0 20px 20px" }}
          >
            <div>
              <i className="fa-regular fa-eye"></i>
            </div>
            <div>
              <i className="fa-solid fa-paperclip"></i>&nbsp;0
            </div>
          </Card.Footer>
        </Card> */}
      </Card.Body>
      <Card.Footer style={{ borderRadius: "0 0 20px 20px" }}>
        <i className="fa-solid fa-plus"></i>&nbsp; Yeni kart ekle
      </Card.Footer>
    </Card>
  );
};

export default ListsItem;
