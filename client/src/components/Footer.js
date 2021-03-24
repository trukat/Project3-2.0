import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { Button } from "./Button";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the newsletter to receive Updates
        </p>
        <p className="footer-subscription-text">You can subscribe here</p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Project</Link>
            <Link to="/">Persentation</Link>
            <Link to="/">Tecnologies</Link>
          </div>
          <div className="footer-link-items">
            <h2>Team</h2>
            <Link to="/">Sudan</Link>
            <Link to="/">Jivaka</Link>
            <Link to="/">Kathy</Link>
            <Link to="/">Franco</Link>
            <Link to="/">Lester</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>UC Berkeley Extension</h2>
            <Link to="/">info</Link>
            <Link to="/">Bootcamp</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Youtube</Link>Name
            <Link to="/">Spotify</Link>
            <Link to="/">Itunes</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              GroovIn
            </Link>
          </div>
          <small className="website-rights">Team Berlin © 2021</small>
          <div className="social-icons">
            <Link
              className="social-icon-link Github"
              to="/"
              target="_blank"
              aria-label="GitHub"
            >
              <i className="fab fa-github" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
