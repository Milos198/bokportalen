import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BookGrid from "../components/BookGrid";

export default function Category() {
  const { name } = useParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategory() {
      setLoading(true);
      const res = await fetch(`https://gutendex.com/books?topic=${name}`);
      const data = await res.json();
      setBooks(data.results);
      setLoading(false);
    }
    fetchCategory();
  }, [name]);

  if (loading) return <p style={{ color: "white" }}>Laster bøker...</p>;

  return (
    <BookGrid
      books={books}
      title={`Kategori: ${name.charAt(0).toUpperCase() + name.slice(1)}`}
    />
  );
}
