import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Box, Grid } from "@mui/material";
import logo from "/src/assets/star-wars-logo.png";
import Button from "@mui/material/Button";

const Header = () => {
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <>
      <AppBar position="static" color="transparent">
        <Toolbar disableGutters>
          <Box
            component="img"
            sx={{
              height: 90,
              width: "auto",
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              objectFit: "contain",
              backgroundColor: "black",
            }}
            alt="Star Wars Logo"
            src={logo}
          />
          <Box
            component="img"
            sx={{
              height: 65,
              width: "auto",
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              objectFit: "contain",
              backgroundColor: "black",
            }}
            alt="Star Wars Logo"
            src={logo}
          />
        </Toolbar>
      </AppBar>
      {token && (
        <Container>
          <Grid mt={2} item xs={12} sm={6} md={3}>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button variant="contained" onClick={handleLogout}>
                Cerrar sesión
              </Button>
            </Box>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default Header;
