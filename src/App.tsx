import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import KanbanBoardsPage from "./pages/KanbanBoardsPage";
import { ToastContainer } from "react-toastify";
import { Container } from "react-bootstrap";
import { useState } from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [token, setToken] = useState<string>("");
  const handleLogin = (token: string) => {
    setToken(token);
    setIsLoggedIn(true);
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage onSuccess={handleLogin} />,
    },
    {
      path: "/login",
      element: <LoginPage onSuccess={handleLogin} />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
    {
      path: "/kanbanboards",
      element: <KanbanBoardsPage />,
    },
  ]);
  return (
    <>
      <Container fluid className="vh-100">
        <ToastContainer autoClose={2000} />
        <RouterProvider router={router} />
      </Container>
    </>
  );
};

export default App;
