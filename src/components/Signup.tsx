import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/css/Signup.css";
import { Login } from "./Login";

interface Props {
  setUser: any;
  setShowLogin: any;
}

export const Signup = ({ setUser, setShowLogin }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSignup = async (e: any) => {
    e.preventDefault();
    if (email === "" || password === "" || username === "") {
      alert("Please enter a username, email, and password");
      return;
    }
    // api call to signup
    const data = await fetch("http://localhost:5000/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });
    if (data.status === 400) {
      alert("User already exists");
      return;
    }
    const user = await data.json();
    if (user) {
      // set user in local storage
      localStorage.setItem("user", JSON.stringify(user));
      // set user in state
      setUser(user);
      setShowLogin(true);
    } else {
      alert(data.statusText);
    }
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>

          <div className="text-center">
            Already registered?{" "}
            <a
              href=""
              className="link-primary"
              onClick={(e) => {
                e.preventDefault();
                setShowLogin(true);
              }}
            >
              Sign In
            </a>
          </div>

          <div className="form-group mt-3">
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
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
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="btn btn-dark"
              onClick={handleSignup}
            >
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot
            <a href="#" className="text-primary">
              {" "}
              password?
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};
