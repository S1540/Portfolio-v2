import React, { useEffect, useState } from "react";
import Header from "./components/common/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/common/Footer";
import Login from "./pages/Login";
import ProtectedRoutes from "./protectedRoutes/ProtectedRoutes";
import AdminDashboard from "./pages/AdminDashboard";
import ProjectPage from "./pages/ProjectPage";
import Loader from "./components/common/Loader";
import { Routes, Route, useLocation } from "react-router-dom";
import AIChatbot from "./components/AiChatbot/AIChatbot";
import ScrollToTop from "./components/common/ScrollToTop";
import ContactPage from "./pages/ContactPage";

const AppLayout = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [location.pathname]);
  return (
    <>
      <Header />
      <AIChatbot />
      <ScrollToTop />
      <div className="relative">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/lock-Auth" element={<Login />} />
          <Route
            path="/Admin-Dashboard"
            element={
              <ProtectedRoutes>
                <AdminDashboard />
              </ProtectedRoutes>
            }
          />
        </Routes>
        {loading && <Loader />}
      </div>
      <Footer />
    </>
  );
};

export default AppLayout;
