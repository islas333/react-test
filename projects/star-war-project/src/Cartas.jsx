import React, { useState, useEffect } from "react";
import { Box, CircularProgress, Container, Grid } from "@mui/material";
import Carta from "./carta";

const Cartas = ({ pagina, error, loading, setLoading, typeSearch, searchParams }) => {
  const [errorCard, setError] = useState(false);
  const [resultsData, setResults] = useState([]);

  useEffect(() => {
    let url = "";
    let query = {};

    switch (typeSearch) {
      case 1:
        url = "http://localhost:3002/swapi/people";
        query = { id: pagina.toString() };
        break;
      case 2:
        url = "http://localhost:3002/swapi/search";
        query = { tipo: `${searchParams.selection}`, dato: `${searchParams.searchTerm}`};
        break;
      default:
        // Manejar otros casos o errores si es necesario
        break;
    }

    const token = localStorage.getItem("token");

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(query),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        if (data.error) {
          setError(true);
        }

        if (data.results) {
          setResults(data.results);
          setLoading(false);
        }

      })
      .catch((error) => {
        console.error("Error en lista de personajes:", error);
      }
  )}, [pagina, typeSearch, searchParams, setLoading]);

  if (error) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        No se encontro la información
      </Box>
    );
  }

  if (errorCard) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        Token no proporcionado o invalido, volver a hacer login
      </Box>
    );
  }

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
    <>
      <Grid
        sx={{
          marginTop: 4,
        }}
        container
        spacing={4}
      ></Grid>
      <Grid container spacing={2}>
        {resultsData.map((personaje, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Carta
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
    </>
  );
};

export default Cartas;
