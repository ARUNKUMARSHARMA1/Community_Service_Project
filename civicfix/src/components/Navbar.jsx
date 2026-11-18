import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="brand"><span className="brand-dot" />CivicFix</Link>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/report">Report issue</NavLink>
        <NavLink to="/track">Track issues</NavLink>
        <NavLink to="/admin">Admin</NavLink>
      </nav>
    </header>
  );
}
