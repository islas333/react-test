import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

// TODO Eliminar legacy code

// Mapeo de colores de cabello a español
const hairColorTranslation = {
  blond: "Rubio",
  black: "Negro",
  brown: "Cafe",
  red: "Rojo",
  gray: "Gris",
  white: "Blanco",
  "n/a": "Desconocido",
};

// Mapeo genero
const genderTranslation = {
  male: "Masculino",
  female: "Femenino",
  hermaphrodite: "Hermafrodita",
  "n/a": "Desconocido",
};

export default function CardPersonaje({
  dataImg,
  title,
  height,
  mass,
  hair_color,
  gender,
  homeworld,
  birth_year,
  peliculas,
}) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const base64Image = `data:image/png;base64,${dataImg}`;
  const altura = height !== "unknown" ? `${height} cm` : "Desconocido";
  const peso = mass !== "unknown" ? `${mass} kg` : "Desconocido";
  const translatedHairColor =
    hairColorTranslation[hair_color.toLowerCase()] || hair_color;
  const translatedGender = genderTranslation[gender.toLowerCase()] || gender;
  const fechaNacimiento =
    birth_year !== "unknown" ? `${birth_year}` : "Desconocido";

  // const [title, setTitle] = useState("Lizard");
  // const [height, setHeight] = useState("N/D");
  // const [image, setImage] = useState("");
  // const [birth_year, setBirthYear] = useState("N/D");
  // const [mass, setMass] = useState("N/D");
  // const [hairColor, setHairColor] = useState("N/D");
  // const [gender, setGender] = useState("N/D");
  // const [homeworld, setHomeworld] = useState("N/D");
  // const [films, setFilms] = useState("N/D");

  // useEffect(() => {
  //   fetch("http://localhost:3002/swapi/personaje", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ id: 1 }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {

  // setTitle(data.name);
  // setHeight(data.height);
  // setBirthYear(data.birth_year);
  // setMass(data.mass);
  // setHomeworld(data.homeworld);
  // setFilms(data.films);

  // Traducir genero
  // const translatedGender = genderTranslation[data.gender.toLowerCase()] || data.gender;
  // setGender(translatedGender);

  // Traducción del color de cabello
  // const translatedHairColor = hairColorTranslation[data.hair_color.toLowerCase()] || data.hair_color;
  // setHairColor(translatedHairColor);

  // const base64Image = `data:image/jpeg;base64,${data.img}`;
  // setImage(base64Image);
  //     })
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

  if (!base64Image) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "50vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Card
        sx={{
          maxWidth: 345,
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        <CardMedia
          sx={{
            height: 350,
          }}
          image={base64Image}
          title="Personaje Star War"
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

        {/* <DialogContent>
          <Typography variant="body2" color="text.secondary">
            <Box sx={{ alignItems: "center" }}>
              <CardMedia
                component="img"
                sx={{ width: 200, height: 200, borderRadius: 1 }}
                image={base64Image}
                alt={title}
              />
              <Box sx={{ ml: 2 }}>
                <Typography variant="h6" component="div">
                  {title}
                </Typography> */}
        {/* <Typography variant="body2" color="text.secondary">
                  Altura: {height} cm
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Peso: {mass} kg
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Color de cabello: {hairColor}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Género: {gender}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Planeta de origen: {homeworld}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Fecha de nacimiento: {birth_year}
                </Typography> */}
        {/* <Typography variant="body2" color="text.secondary">
                  Películas: {films}
                </Typography> */}
        {/* </Box>
            </Box>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cerrar</Button>
        </DialogActions> */}
      </Dialog>
    </>
  );
}
