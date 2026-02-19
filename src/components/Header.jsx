import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

export default function Header({ setSearchQuery }) {
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-left">
          <Link to="/" className="logo">
            BokPortalen
          </Link>

          <nav className="nav">
            <Link
              to="/"
              className={location.pathname === "/" ? "nav-link active" : "nav-link"}
            >
              Home
            </Link>

            <Link
              to="/favorites"
              className={
                location.pathname === "/favorites" ? "nav-link active" : "nav-link"
              }
            >
              Favorites
            </Link>
          </nav>
        </div>

        {/* SEARCH WRAPPER */}
        <div className="search-wrapper">
          <input
            type="text"
            placeholder="Søk etter bøker..."
            className={`search-input ${searchOpen ? "open" : ""}`}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <button
  className="search-toggle"
  onClick={() => setSearchOpen(!searchOpen)}
>
  <svg 
    width="22" 
    height="22" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="white" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
  
</button>

        </div>
      </div>
    </header>
  );
}
