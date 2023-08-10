import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PostDetail from "./pages/PostDetail";
const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="post/:id" element={<PostDetail />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
