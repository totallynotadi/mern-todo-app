import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

function Landing() {
  return (
    <div className="Landing">
      <header className="header">
        <div className="container">
          <nav>
            <h1 className="logo">
              <Link to="/">TodoMaster</Link>
            </h1>
          </nav>
        </div>
      </header>

      <section className="main-content">
        <div className="container">
          <div className="content">
            <h2>Organize Your Tasks, Boost Your Productivity</h2>
            <p>
              TodoMaster helps you manage your daily tasks with ease and
              efficiency. Start getting things done today!
            </p>
            <Link to="/Signup" className="cta-button">
              Get Started
            </Link>
          </div>
          <div className="features-grid">
            <div className="feature-item">
              <h3>Easy Task Management</h3>
              <p>Drag and drop your tasks to organize them the way you want.</p>
            </div>
            <div className="feature-item">
              <h3>Reminders & Notifications</h3>
              <p>
                Set reminders for important tasks and never miss a deadline.
              </p>
            </div>
            <div className="feature-item">
              <h3>Cross-Platform Sync</h3>
              <p>Access your tasks from anywhere, on any device.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
