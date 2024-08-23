import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (username.trim() === "") {
      alert("El campo de usuario no puede estar vacío.");
      return;
    }

    if (password.trim() === "") {
      alert("El campo de password no puede estar vacío.");
      return;
    }

    try {

      const response = await fetch("http://localhost:3002/swapi/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);

          if (data.error) {
            setError("Login fallo. Valida tus credenciales y intenta de nuevo.");
          } else {
            localStorage.setItem("token", data.token);
            window.location.reload();
          }
        })
        .catch((error) =>
          console.error("Error para obtener lista de personajes:", error)
        );


      // if (!response.ok) {
      //   throw new Error("Login failed");
      // }

    } catch (error) {
      setError("Login fallo. Valida tus credenciales y intenta de nuevo.");
    }
  };

  return (
    <Box sx={{ maxWidth: 300, margin: "auto", padding: 2 }}>
      <form onSubmit={handleLogin}>
        <TextField
          label="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        {error && <Box sx={{ color: "red", marginBottom: 2 }}>{error}</Box>}
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>
    </Box>
  );
};

export default Login;
