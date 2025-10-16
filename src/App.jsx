import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./layout/Auth";
import Login from "./paginas/Login";
import { Register } from "./paginas/Register";
import { Forgot } from "./paginas/Forgot";
import { NotFound } from "./paginas/NotFound";
import Dashboard from "./layout/Dashboard";
import Listar from "./paginas/Listar";
import Visualizar from "./paginas/Visualizar";
import Crear from "./paginas/Crear";
import Actualizar from "./paginas/Actualizar";
import Perfil from "./paginas/Perfil";
import { Confirmar } from "./paginas/Confirmar";
import Restablecer from "./paginas/Restablecer";
import { PrivateRoute } from "./routes/PrivateRoute";
import PrivateRouteWithRole from "./routes/PrivateRouteWithRole";
import LandinPage from "./paginas/LandinPage";
import RegisterAdmin from "./paginas/RegisterAdmin";
import ForoComunidad from "./paginas/comunidades/Foro";
import { PerfilEstudiante } from "./paginas/PerfilEstudiante";
import ChatAmigos from "./Chat/pages/ChatAmigos";
import { Toaster } from "react-hot-toast";
import Configuracion from "./paginas/Configuracion";
import { useEffect } from "react";
import { useAuthStore } from "./Chat/store/useAuthStore";

function App() {
  const { checkAuth } = useAuthStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route index element={<LandinPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
