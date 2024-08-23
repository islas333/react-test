import React, { useState } from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./Header";
import Box from "@mui/material/Box";
import Contenedor from "./Contenedor";
import Login from "./Login";

const App = () => {
  const [page, setPage] = useState(1);
  const totalPages = 9;
  const token = localStorage.getItem("token");
  
  return (
    <>
      <Header />
      <Box sx={{ padding: 2 }}>
      {token ? <Contenedor /> : <Login />}
      </Box>
    </>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
