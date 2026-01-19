import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/common/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/common/Footer";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoutes from "./protectedRoutes/ProtectedRoutes";
import AdminDashboard from "./pages/AdminDashboard";
import ProjectPage from "./pages/ProjectPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AuthProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project" element={<ProjectPage />} />
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
          <Footer />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
