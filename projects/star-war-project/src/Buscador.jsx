import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  TextField,
  Button,
} from "@mui/material";

const Buscador = ({
  setTypeSearch,
  setSearchParams,
  setCountPage,
  handleChange,
}) => {
  const [selection, setSelection] = useState("name");
  const [searchTerm, setSearchTerm] = useState("");

  const handleChangeSelection = (event) => {
    setSelection(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    if (searchTerm.trim() === "") {
      alert("El campo de búsqueda no puede estar vacío.");
      return;
    }
    setSearchParams({ selection, searchTerm });
    setTypeSearch(2);
    setCountPage(1);
    handleChange(null, 1);
  };

  const handleSearchClickClear = () => {
    setSearchTerm("");
    setSearchParams({ selection: "", searchTerm: "" });
    setTypeSearch(1);
    setCountPage(9);
    handleChange(null, 1);
  };

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Box>
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
      <Grid item xs={12} sm={6} md={6} mt={2}>
        <TextField
          label="Buscar personaje por Nombre / Género / Planeta de origen / Color de cabello"
          variant="standard"
          value={searchTerm}
          onChange={handleSearchChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6} mt={2}>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <Button
            variant="contained"
            onClick={handleSearchClick}
            sx={{ mr: 2 }}
          >
            Buscar
          </Button>
          <Button variant="contained" onClick={handleSearchClickClear}>
            Limpiar
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Buscador;
