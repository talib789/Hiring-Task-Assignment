import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
        <Link className="navbar-brand" to="/">
           Doggo API
        </Link>
      </nav>
    </div>
  );
};
