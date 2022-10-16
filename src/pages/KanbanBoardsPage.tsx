import React, { FC } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { BoardList } from "../components/KanbanBoards";

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
      <BoardList />
    </div>
  );
};

export default KanbanBoardsPage;
