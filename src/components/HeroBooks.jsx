import { Link } from "react-router-dom";
import "./HeroBooks.css";

export default function HeroBooks({ books }) {
  if (!books || books.length < 2) return null;

  return (
    <div className="hero-container">
      {books.slice(0, 2).map((book) => (
        <div key={book.id} className="hero-card">
          <img
            src={book.formats["image/jpeg"]}
            alt={book.title}
            className="hero-image"
          />

          <div className="hero-content">
            <h2>{book.title}</h2>
            <p className="hero-author">
              {book.authors?.[0]?.name || "Unknown author"}
            </p>

            <p className="hero-description">
              {book.subjects?.[0] || "No description available"}
            </p>

            <Link to={`/book/${book.id}`} className="hero-button">
              Detalji
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
