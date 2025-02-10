import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Login from "./Components/login";
import ContentGrid from "./Components/ContentGrid";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function Layout() {
  const location = useLocation();
  const showNavbarFooter = location.pathname !== "/";

  return (
    <>
      {showNavbarFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/ContentGrid" element={<ContentGrid />} />
      </Routes>
      {showNavbarFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
