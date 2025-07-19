import { Routes, Route } from "react-router-dom";
import NavbarC from "./components/navbar/NavbarC";
import TextCarouselC from "./components/textcarousel/TextCarouselC.jsx";

import "./App.css";

const HomePage = () => {
  return (
    <>
      <TextCarouselC />
    </>
  );
};

function App() {
  return (
    <>      
      <NavbarC />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </> 
  );
}

export default App;
