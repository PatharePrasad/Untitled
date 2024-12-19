import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "@/components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Subsmission from "./components/pages/Subsmission";
import NotFound from "./components/pages/NotFound";
import Error from "./components/pages/Error";

const appEl = document.querySelector("#app");
const root = createRoot(appEl);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/error" element={<Error />} />
        <Route path="/submission" element={<Subsmission />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);