import React, { FC } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import KanbanBoards from "../components/KanbanBoards";
import Header from "../components/Header";

export type KanbanBoardsProps = {
  onLogout: () => void;
};

const KanbanBoardsPage: FC<KanbanBoardsProps> = (props) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    props.onLogout();
    navigate("/login");
  };
  return (
    <div>
      <Header onLogout={handleLogout} />
      <KanbanBoards />
    </div>
  );
};

export default KanbanBoardsPage;
