import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Barra de navegación siempre visible
import WelcomePage from "./components/WelcomePage"; // Página de bienvenida
import RegisterForm from "./components/RegisterForm"; // Formulario de registro
import Preferencias from "./components/Preferencias"; // Preferencias del usuario
import Tutoriales from "./components/Tutoriales"; // Página de tutoriales
import PrivateRoute from "./components/PrivateRoute"; // Componente para proteger rutas privadas

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/tutoriales" element={<Tutoriales />} />
        <Route
          path="/preferencias"
          element={
            <PrivateRoute>
              <Preferencias />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
