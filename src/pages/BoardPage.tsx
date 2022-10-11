import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import AddBoard from "../components/Board";
import Header from "../components/Header";

export type BoardPageProps = {
  onLogout: () => void;
};
const BoardPage: FC<BoardPageProps> = (props) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    props.onLogout();
    navigate("/login");
  };
  return (
    <div>
      <Header onLogout={handleLogout} />
      <AddBoard />
    </div>
  );
};

export default BoardPage;
