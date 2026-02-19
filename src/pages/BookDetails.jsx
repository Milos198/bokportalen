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
    <div style={{ color: "white", padding: "20px" }}>
      <h1>{book.title}</h1>

      <img
        src={cover}
        alt={book.title}
        style={{ width: "250px", borderRadius: "12px", marginTop: "20px" }}
      />

      <p><strong>Author:</strong> {book.authors?.[0]?.name || "Unknown"}</p>
      <p><strong>Downloads:</strong> {book.download_count}</p>
      <p><strong>Languages:</strong> {book.languages?.join(", ") || "No languages"}</p>
      <p><strong>Subjects:</strong> {book.subjects?.join(", ") || "No subjects"}</p>
      <p><strong>Kategorija:</strong> {book.subjects?.join(", ")}</p>


      <a
        href={book.formats["text/html"] || book.formats["text/plain"]}
        target="_blank"
        rel="noreferrer"
        style={{ color: "#4ea1ff" }}
      >
        Read book
      </a>

      <br /><br />

      <button
  onClick={() =>
    isFavorite(book.id) ? removeFavorite(book.id) : addFavorite(book)
  }
  style={{
    padding: "10px 16px",
    borderRadius: "8px",
    cursor: "pointer",
    background: isFavorite(book.id) ? "#ff4d4d" : "#4ea1ff",
    color: "white",
    border: "none",
  }}
>
  {isFavorite(book.id) ? "Fjern fra favoritter" : "Legg til i favoritter"}
</button>

    </div>
  );
}
