import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/css/Signup.css";

export const Signup = () => {
    return (
        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="text-center">
                Already registered?{" "}
                <span className="link-primary" >
                  Sign In
                </span>
              </div>
              <div className="form-group mt-3">
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Username"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Email Address"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Password"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-dark">
                  Submit
                </button>
              </div>
              <p className="text-center mt-2">
                Forgot <a href="#">password?</a>
              </p>
            </div>
          </form>
        </div>
      )
};