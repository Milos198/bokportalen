import "./BookCard.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";


export default function BookCard({ book }) {
  const title = book.title;
  const author = book.authors?.[0]?.name || "Unknown author";
  const cover =
    book.formats?.["image/jpeg"] ||
    "https://via.placeholder.com/300x450?text=No+Cover";
  const downloads = book.download_count;
  const year = book?.copyright ? "©" : "Public domain";
  const { addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext);


  return (
  <Link to={`/book/${book.id}`} className="book-card-link">
    <article className="book-card">
      <div className="book-card-image-wrapper">
  <img src={cover} alt={title} className="book-card-image" loading="lazy" />


  <button
    className={`favorite-btn ${isFavorite(book.id) ? "active" : ""}`}
    onClick={(e) => {
      e.preventDefault(); // sprečava navigaciju na klik
      e.stopPropagation();
      isFavorite(book.id) ? removeFavorite(book.id) : addFavorite(book);
    }}
  >
    {isFavorite(book.id) ? "♥" : "♡"}

  </button>
</div>

      <div className="book-card-info">
        <h3 className="book-card-title">{title}</h3>
        <p className="book-card-author">{author}</p>
        <div className="book-card-meta">
          <span>{downloads} downloads</span>
          <span>{year}</span>
        </div>
      </div>
    </article>
  </Link>
);

}
