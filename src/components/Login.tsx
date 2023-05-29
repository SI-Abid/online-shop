import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/css/Login.css";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });
  const handleLogin = async (e: any) => {
    e.preventDefault();
    if (username === "" || password === "") {
      alert("Please enter a username and password");
      return;
    }
    // api call to login
    let data = await fetch("http://localhost:5000/users/" + username);
    let user = await data.json();
    if (user) {
      if (user.password === password) {
        // set user in local storage
        localStorage.setItem("user", JSON.stringify(user));
        // set user in state
        setUser(user);
      } else {
        alert("Incorrect Password");
      }
    }
  };
  const handleLogout = () => {
    // remove user from local storage
    localStorage.removeItem("user");
    // remove user from state
    setUser({} as any);
  };
  //   check if user data is in local storage
  useEffect(() => {
    const user = localStorage.getItem("user");
    const userObj = user ? JSON.parse(user) : null;
    setUser(userObj);
  }, []);

  if (user && user.username) {
    return (
      <div className="container mt-5 text-center justify-content-center align-items-center flex-column flex-wrap ">
        <h1>Welcome {user.username}</h1>
        <br />
        <h3>Protected Page</h3>
        <br />
        <button className="btn btn-dark" onClick={handleLogout}>
          Logout
        </button>
      </div>
    );
  }
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-4">
            <button
              type="submit"
              className="btn btn-dark"
              onClick={handleLogin}
            >
              Sign in
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
};
