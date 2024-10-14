import { Routes, Route, BrowserRouter } from "react-router-dom";
import AdicionarUsuario from "./pages/login/App";
export default function Navegacao() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={ <AdicionarUsuario/> } />         
        </Routes>
    </BrowserRouter>
  )
}