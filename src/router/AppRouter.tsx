// src/router/AppRouter.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/footer"; // <-- 1. IMPORTAR FOOTER

import HomePage from "../pages/HomePage";
import ProjectsPage from "../pages/ProjectsPage";
import ContactPage from "../pages/ContactPage";
import AboutMePage from "../pages/AboutMePage"; // <-- IMPORTAR AboutMePage

const AppRouter = () => {
  return (
    <BrowserRouter>
      {/* 2. ENVOLVER EN UN DIV CON CLASE */}
      <div className="appContainer">
        <Navbar />
        <main className="mainContent">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre-mi" element={<AboutMePage />} />
            <Route path="/proyectos" element={<ProjectsPage />} />
            <Route path="/contacto" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer /> {/* <-- 3. AÑADIR FOOTER */}
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
