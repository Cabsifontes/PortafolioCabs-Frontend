import { Routes, Route } from "react-router-dom";
import NavbarC from "./components/navbar/NavbarC";
import TextCarouselC from "./components/textcarousel/TextCarouselC.jsx";
import FooterC from "./components/footer/FooterC";


const HomePage = () => (
  <>
    <TextCarouselC />
  </>
);

function App() {
  return (
    <div className="app-wrapper">
      <NavbarC />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <FooterC />
    </div>
  );
}

export default App;

