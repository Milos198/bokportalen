import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

export default function BookDetails() {
  const { id } = useParams();
const { addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext);
const [book, setBook] = useState(null);
const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function fetchBook() {
      const res = await fetch(`https://gutendex.com/books/${id}`);
      const data = await res.json();
      setBook(data);
      setLoading(false);
    }
    fetchBook();
  }, [id]);

  if (loading) return <p style={{ color: "white" }}>Laster...</p>;
  if (!book) return <p style={{ color: "white" }}>Fant ikke bok.</p>;

  const cover =
    book.formats["image/jpeg"] ||
    "https://via.placeholder.com/300x450?text=No+Cover";

  return (
  <div className="detailsOpen" style={{ color: "white", padding: "20px" }}>
    
    <div className="detailsOpenText">
      <h1>{book.title}</h1>

      <p><strong>Author:</strong> {book.authors?.[0]?.name || "Unknown"}</p>
      <p><strong>Downloads:</strong> {book.download_count}</p>
      <p><strong>Languages:</strong> {book.languages?.join(", ") || "No languages"}</p>
      <p><strong>Subjects:</strong> {book.subjects?.join(", ") || "No subjects"}</p>
      <p><strong>Kategorija:</strong> {book.bookshelves}</p>
    </div>

    <div className="detailsOpenImage">
      <img
        src={cover}
        alt={book.title}
        style={{ width: "250px", borderRadius: "12px" }}
      />

      <a
        href={book.formats["text/html"] || book.formats["text/plain"]}
        target="_blank"
        rel="noreferrer"
        style={{
          color: "#ffffff",
          background: "#0e1428",
          padding: "10px 16px",
          borderRadius: "8px",
          textDecoration: "none",
          textAlign: "center",
          
          marginTop: "20px",
          fontWeight: "400",
        }}
      >
        Read book
      </a>

      <button
        onClick={() =>
          isFavorite(book.id) ? removeFavorite(book.id) : addFavorite(book)
        }
        style={{
          padding: "10px 16px",
          borderRadius: "8px",
          cursor: "pointer",
          background: "#661c30",
          color: "white",
          border: "none",
          marginTop: "12px",
          fontWeight: "400",
        }}
      >
        {isFavorite(book.id) ? "Fjern fra favoritter" : "Legg til i favoritter"}
      </button>
    </div>

  </div>
);

}
