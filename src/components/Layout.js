import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";


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
      main: "#0443b5",
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
        
      </ThemeProvider>
    </div>
  );
};

export default Layout;
