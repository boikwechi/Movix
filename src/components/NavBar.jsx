import { Link } from "react-router-dom";
import "../css/NavBar.css"; // Importing CSS for styling the NavBar component
function NavBar() {
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to = '/'>Movie App</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/Favorites" className="nav-link">Favorites</Link>
        </div>
    </nav>
}
export default NavBar;
// // This code defines a functional component called NavBar that renders a navigation bar with links to the home and favorites pages.