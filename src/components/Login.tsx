import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../components/css/Login.css'

export const Login = () => {
    return (            
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="form-group mt-3">
                        <label>email/username</label>
                        <input
                        type="email"
                        className="form-control mt-2"
                        placeholder="Enter email or username"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                        type="password"
                        className="form-control mt-1"
                        placeholder="Enter password"
                        />
                    </div>
                    <div className="d-grid gap-2 mt-4">
                        <button type="submit" className="btn btn-dark">
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
}
