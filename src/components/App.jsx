import "modern-normalize";

import { Route, Routes } from "react-router-dom";
import style from "./App.module.css";
import HomePage from "../page/HomePage/HomePage";
import CatalogPage from "../page/CatalogPage/CatalogPage";
import CarPage from "../page/CarPage/CarPage";
import Header from "./Header/Header";

function App() {
  return (
    <>
      <Header />
      <main className={style.container}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CarPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
