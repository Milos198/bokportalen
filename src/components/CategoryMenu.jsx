import { Link, useLocation } from "react-router-dom";
import "./CategoryMenu.css";

const categories = [
  "Fiction",
  "Mystery",
  "Thriller",
  "Romance",
  "Fantasy",
  "Morality",
  "Society",
  "Power",
  "Justice",
  "Adventure",
  "Tragedy",
  "War",
  "Philosophy",
];

export default function CategoryMenu() {
  const location = useLocation();

  return (
    <div className="category-menu">
      {categories.map((cat) => {
        const path = `/category/${cat.toLowerCase()}`;
        const isActive = location.pathname === path;

        return (
          <Link
            key={cat}
            to={path}
            className={`category-chip ${isActive ? "active" : ""}`}
          >
            {cat}
          </Link>
        );
      })}
    </div>
  );
}
