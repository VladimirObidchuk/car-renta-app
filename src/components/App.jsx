import "modern-normalize";

import { Route, Routes } from "react-router-dom";
import "./App.module.css";
import HomePage from "../page/HomePage/HomePage";
import CatalogPage from "../page/CatalogPage/CatalogPage";
import CarPage from "../page/CarPage/CarPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/catalog/:id" element={<CarPage />} />
    </Routes>
  );
}

export default App;
