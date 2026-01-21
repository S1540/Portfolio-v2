import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AppLayout from "./AppLayout";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <AppLayout />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
