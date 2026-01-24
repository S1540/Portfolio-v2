import { AppWindowMacIcon } from "lucide-react";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null);
  const [admin, setAdmin] = useState(null);

  // check auth first load
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/auth/me", {
          method: "GET",
          credentials: "include",
        });
        const data = await res.json();
        if (data.authenticated) {
          setIsAuth(true);
          setAdmin(data.admin);
        } else {
          setIsAuth(false);
          setAdmin(null);
        }
      } catch (error) {
        setIsAuth(false);
        setAdmin(null);
        // console.log(error);
      }
    };
    checkAuth();
  }, []);

  // custom Login
  const login = () => {
    setIsAuth(true);
  };
  return (
    <AuthContext.Provider value={{ isAuth, admin, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
