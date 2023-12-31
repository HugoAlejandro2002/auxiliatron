import { ThemeProvider, createTheme, CssBaseline, Container, Box } from '@mui/material';
import Calculator from "./components/Calculator";

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Azul
    },
    secondary: {
      main: '#dc004e', // Rojo
    },
    error: {
      main: '#f44336', // Rojo para errores
    },
    background: {
      default: '#f4f4f4', // Fondo gris claro
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          margin: '8px',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minHeight="100vh"
          padding={2}
        >
          <Calculator />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
