import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <nav>
            <h1 className="logo">
              <Link to="/">TodoMaster</Link>
            </h1>

            <ul>
              <li>
                <a href="#">
                  <Link to="/">Home</Link>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="signup-content">
        <div className="container">
          <div className="signup-box">
            <h2>Sign Up</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                />
              </div>
              <Link to="/Todos">
                <button className="cta-button">Sign up</button>
              </Link>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
