import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Lista from "./pages/Lista";
import { AppBar, Toolbar, Button, Container } from "@mui/material";
import React from "react";

export default function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">
            Cadastro
          </Button>
          <Button color="inherit" component={Link} to="/lista">
            Lista
          </Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Cadastro />} />
          <Route path="/lista" element={<Lista />} />
        </Routes>
      </Container>
    </Router>
  );
}
