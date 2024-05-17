import * as React from "react";
import heart from './../../images/icons/arcticons--heart.svg'
import cart from './../../images/icons/mdi-light--cart.svg'
import './navbar.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "../../pages/about";

function Navbar() {
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="logo-container">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/37d8ec3b744038d88585bb8543bc8ea1b3d9e4fcac032e7ef712384ca66d48dc?apiKey=145a614dc8264552af1ec45aa2fef7a9&"
            className="logo"
            alt="Logo"
          />
          <span className="site-name">SmartShop</span>
        </div>
        <form className="search-form">
          <input
            id="searchInput"
            type="text"
            className="search-input"
            placeholder="Search Product..."
            aria-label="Search Product"
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
        <div className="user-actions">
          <img
            loading="lazy"
            src={heart}
            className="user-icon"
            alt="User"
          />
          <div className="cart-container">
            <img
              loading="lazy"
              src={cart}
              className="cart-icon"
              alt="Cart"
            />
            <span className="cart-count">15</span>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d1f8ca0f1468c80a20cda12236fe44625115dd889193f5daf60d0c1b9a93136?apiKey=145a614dc8264552af1ec45aa2fef7a9&"
            className="notification-icon"
            alt="Notifications"
          />
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <nav className="nav-links">
          <a href="#categories" className="nav-link">
            Categories
          </a>
          <a href="about.jsx" className="nav-link">
            About
          </a>
          <a href="#contacts" className="nav-link">
            Contacts
          </a>
        </nav>
        <div className="become-partner">
          <a href="#partner" className="partner-link">
            Become a Partner
          </a>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/93e32f5e385847444c5cf4e6cf14f2fc7b9b448bb50d839d387bc9b03ccf4bd1?apiKey=145a614dc8264552af1ec45aa2fef7a9&"
            className="partner-icon"
            loading="lazy"
            alt="Partner"
          />
        </div>
      </div>
    </footer>
  );
}

export default function Components() {
  return (
    <>
      <Navbar />
      <main>
        <Footer />
      </main>
    </>
  );
}