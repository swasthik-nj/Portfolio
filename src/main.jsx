import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "lenis/dist/lenis.css";
import "./index.css";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import SmoothScroll from "./components/SmoothScroll.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <SmoothScroll>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<App />} />
        </Routes>
      </SmoothScroll>
    </BrowserRouter>
  </StrictMode>
);
