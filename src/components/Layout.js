import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BottomNavigation, Typography, Button } from "@mui/material";

import { Link } from "@mui/icons-material";

import ResponsiveAppBar from "./ResponsiveAppBar";

const theme = createTheme({
  // Definir aquí los nuevos estilos o modificar los existentes
  palette: {
    primary: {
      main: "#a01616", // Color principal
      light: "#757de8",
      dark: "#002984",
      contrastText: "#ffffff", // Color del texto en el fondo principal
    },
    secondary: {
      main: "#a01616", // Color secundario
      light: "#ff5983",
      dark: "#bb002f",
      contrastText: "#ffffff", // Color del texto en el fondo secundario
    },
    error: {
      main: "#f44336",
      light: "#e57373",
      dark: "#d32f2f",
      contrastText: "#ffffff",
    },
    warning: {
      main: "#ff9800",
      light: "#ffb74d",
      dark: "#f57c00",
      contrastText: "#ffffff",
    },
    info: {
      main: "#2196f3",
      light: "#64b5f6",
      dark: "#1976d2",
      contrastText: "#ffffff",
    },
    success: {
      main: "#4caf50",
      light: "#81c784",
      dark: "#388e3c",
      contrastText: "#ffffff",
    },
    background: {
      default: "#f5f5f5", // Fondo principal de la aplicación
      paper: "#ffffff", // Fondo de los elementos tipo "paper"
    },
    text: {
      primary: "#000000", // Color del texto principal
      secondary: "#ffffff", // Color del texto secundario
    },
    alternative: {
      main: "#941209",
      light: "#757de8",
      dark: "#840039",
      contrastText: "#ffffff", // Color del texto en el fondo principal
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
});

const Layout = ({ children }) => {
  
  return (
    <div>
      <ThemeProvider theme={theme}>
        
        <ResponsiveAppBar />
        <div>
          {/* Rutas */}
          {children}
        </div>
        <BottomNavigation
          elevation={0}
          style={{
            padding: 0,
            margin: 0,
            width: "100%",
            boxSizing: "border-box",
            position: "fixed",
            left: 0,
            bottom: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            height: "2rem",
          }}
        >
          <Typography align="center">
            TMDB2EMOJIS utiliza{" "}
            <Button
              color="alternative"
              variant="contained"
              endIcon={<Link />}
              sx={{ padding: "0 16px" }}
              href={"https://www.themoviedb.org/documentation/api"}
            >
              TMDB API
            </Button>
          </Typography>
        </BottomNavigation>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
