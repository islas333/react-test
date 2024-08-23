import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CardPersonaje from "./CardPersonaje";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Paginador from "./Paginador";
// import TextField from "@mui/material/TextField";
import {
  FormControl,
  MenuItem,
  Select,
  TextField,
  InputLabel,
  Button,
} from "@mui/material";

// TODO Eliminar legacy code

const CardGrid = ({ paginaInicial, totalPaginas }) => {
  const [loading, setLoading] = useState(true);
  const [resultsData, setResults] = useState([]);
  const [page, setPage] = useState(paginaInicial);
  const [totalPages, setTotalPages] = useState(totalPaginas);
  const [triggerSearch, setTriggerSearch] = useState(false);

  const handleChange = (event, value) => {
    setLoading(true);
    setPage(value);
  };

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const [selection, setSelection] = useState("name");
  const handleChangeSelection = (event) => {
    setSelection(event.target.value);
  };

  // Buscar por parametro y dato
  const handleSearchClick = () => {
    if (searchTerm.trim() === "") {
      alert("El campo de búsqueda no puede estar vacío.");
      return;
    }
    // Aquí puedes actualizar el estado o realizar cualquier otra acción necesaria
    setTriggerSearch(prev => !prev); // Esto desencadenará el useEffect
  };

  // Metodo de vista card
  useEffect(() => {
    fetch("http://localhost:3002/swapi", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: page }),
    })
      .then((response) => response.json())
      .then((data) => {
        setResults(data.results);
        setLoading(false);
      })
      .catch((error) =>
        console.error("Error para obtener lista de personajes:", error)
      );
  }, [page]);

  // Metodo de busqueda
  useEffect(() => {
    // Filtra los personajes
    fetch("http://localhost:3002/swapi/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tipo: selection, dato: searchTerm }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (triggerSearch) {
          setPage(1)
          setResults(data.results);
        }
        setLoading(false);
      })
      .catch((error) =>
        console.error("Error para obtener lista de personajes:", error)
      );

  }, [triggerSearch]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container>
      <Grid item xs={12} sm={6} md={3}>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth variant="standard">
            <InputLabel id="demo-simple-select-label">Buscar por</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selection}
              label="Buscar por"
              onChange={handleChangeSelection}
            >
              <MenuItem value={"name"}>Nombre</MenuItem>
              <MenuItem value={"gender"}>Género</MenuItem>
              <MenuItem value={"homeworld"}>Planeta de origen</MenuItem>
              <MenuItem value={"hair_color"}>Color de cabello</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={6} mt={2}>
        <TextField
          label="Buscar personaje"
          variant="standard"
          value={searchTerm}
          onChange={handleSearchChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6} mt={2}>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <Button variant="contained" onClick={handleSearchClick}>
            Buscar
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={3}>
        <Paginador
          page={page}
          totalPages={totalPages}
          onPageChange={(e, value) => handleChange(e, value)}
        />
      </Grid>
      <Grid
        sx={{
          marginTop: 2,
        }}
        container
        spacing={4}
      >
        {resultsData.map((personaje, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <CardPersonaje
              dataImg={personaje.img}
              title={personaje.name}
              height={personaje.height}
              mass={personaje.mass}
              hair_color={personaje.hair_color}
              gender={personaje.gender}
              homeworld={personaje.homeworld}
              birth_year={personaje.birth_year}
              peliculas={personaje.peliculas}
            />
          </Grid>
        ))}
      </Grid>
      <Grid>
        <Typography
          mt={2}
          variant="body2"
          color="text.secondary"
          align="center"
        >
          Humberto Islas / islas333@gmail.com / 2024
        </Typography>
      </Grid>
    </Container>
  );
};

export default CardGrid;
