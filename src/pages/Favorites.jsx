import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import BookGrid from "../components/BookGrid";

export default function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  if (favorites.length === 0) {
    return (
      <p style={{ color: "white", padding: "20px" }}>
        Ingen favorittbøker enda.
      </p>
    );
  }

 return (
  <div className="favorites-page">
    <h1 className="favorites-title">Dine favoritter</h1>
    <BookGrid books={favorites} title="" />
  </div>
);

}
