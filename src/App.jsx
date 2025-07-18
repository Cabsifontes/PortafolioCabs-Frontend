import NavbarC from "./components/navbar/NavbarC";
import { Routes, Route } from "react-router-dom";

// Si tienes páginas, descomenta estos imports
// import Inicio from "./pages/Inicio";
// import QuienSoy from "./pages/QuienSoy";
// import Proyectos from "./pages/Proyectos";
// import Contactame from "./pages/Contactame";

function App() {
  return (
    <>
      <NavbarC />
      <Routes>
        {/* <Route path="/inicio" element={<Inicio />} />
        <Route path="/quien-soy" element={<QuienSoy />} />
        <Route path="/proyectos" element={<Proyectos />} />        
        <Route path="/contactame" element={<Contactame />} /> */}
      </Routes>
    </>
  );
}

export default App;
