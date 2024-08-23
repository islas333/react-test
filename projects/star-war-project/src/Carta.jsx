import React, { useState, useEffect } from "react";
import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
  Button,
  Dialog,
  Box,
} from "@mui/material";

const hairColorTranslation = {
  blond: "Rubio",
  black: "Negro",
  brown: "Cafe",
  red: "Rojo",
  gray: "Gris",
  white: "Blanco",
  "n/a": "Desconocido",
};

// Star War Project
//
// Este es un proyecto de frontend construido con Vite y React. El proyecto muestra una interfaz de usuario para interactuar con datos relacionados con Star Wars.
//
// Estructura del Proyecto
//
// - `index.html`: Archivo principal HTML que carga el proyecto.
// - `src/`: Carpeta que contiene todos los archivos fuente de React.
// - `assets/`: Carpeta que contiene los recursos estáticos como imágenes y estilos.
//
// Instalación
//
// Para instalar y ejecutar el proyecto localmente, sigue estos pasos:
//
// 1. Clona el repositorio:
//    ```sh
//    git clone https://github.com/tu-usuario/star-war-project.git
//    cd star-war-project
// ```

// Mapeo genero
const genderTranslation = {
  male: "Masculino",
  female: "Femenino",
  hermaphrodite: "Hermafrodita",
  "n/a": "Desconocido",
};

const Carta = ({
  dataImg,
  title,
  height,
  mass,
  hair_color,
  gender,
  homeworld,
  birth_year,
  peliculas,
}) => {

  const base64Image = `data:image/png;base64,${dataImg}`;
  const altura = height !== "unknown" ? `${height} cm` : "Desconocido";
  const peso = mass !== "unknown" ? `${mass} kg` : "Desconocido";
  const translatedHairColor =
    hairColorTranslation[hair_color.toLowerCase()] || hair_color;
  const translatedGender = genderTranslation[gender.toLowerCase()] || gender;
  const fechaNacimiento =
    birth_year !== "unknown" ? `${birth_year}` : "Desconocido";

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card sx={{
          maxWidth: 345,
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}>
        <CardMedia
          sx={{ height: 350 }}
          image={base64Image}
          title={`Personaje ${title}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleClickOpen}>
            Mas información
          </Button>
        </CardActions>
      </Card>

      <Dialog open={open} onClose={handleClose}>
        <Card sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                {title}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                <strong>Altura:</strong> {altura}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                <strong>Peso:</strong> {peso}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                <strong>Color de cabello:</strong> {translatedHairColor}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                <strong>Genero:</strong> {translatedGender}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                <strong>Planeta de origen:</strong> {homeworld}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                <strong>Fecha de nacimiento:</strong> {fechaNacimiento}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                <strong>Lista peliculas:</strong> {peliculas}
              </Typography>
            </CardContent>
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              <Button variant="outlined" onClick={handleClose}>
                Cerrar
              </Button>
            </Box>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 250 }}
            image={base64Image}
            alt={title}
          />
        </Card>
      </Dialog>
    </>
  );
};
export default Carta;
