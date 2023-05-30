import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "./components/Button";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { Home } from "./components/Home";
import "./App.css";

export const App: React.FC = () => {
  const [user, setUser] = useState({} as any);
  const [showLogin, setShowLogin] = useState(true);
  const handleLogout = () => {
    // remove user from local storage
    localStorage.removeItem("user");
    // remove user from state
    setUser(null as any);
    setShowLogin(true);
  };
  console.log(user);
  if (!user || showLogin ) {
    if (showLogin) {
      return <Login setUser={setUser} setShowLogin={setShowLogin} />;
    } else {
      return <Signup setUser={setUser} setShowLogin={setShowLogin} />;
    }
  } else {
    return (
      <div className="App">
        <Home user={user}>
          <Button onClick={handleLogout}>Logout</Button>
        </Home>
      </div>
    );
  }
};
