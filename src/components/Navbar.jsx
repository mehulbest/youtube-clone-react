import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(localStorage.getItem("user"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/search/${searchTerm}`);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <nav style={{ display: "flex", alignItems: "center", padding: "8px 16px", backgroundColor: "#FF0000", color: "white", position: "sticky", top: 0, zIndex: 1000 }}>
      <Link to="/" style={{ color: "white", textDecoration: "none", fontSize: "24px" }}>
        YouTube Clone
      </Link>

      <form onSubmit={handleSubmit} style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: "50%", padding: "8px", borderRadius: "20px", border: "none" }}
        />
        <button type="submit" style={{ padding: "8px", marginLeft: "5px", borderRadius: "20px", border: "none", backgroundColor: "white", color: "black" }}>Search</button>
      </form>

      <div style={{ marginLeft: "20px", display: "flex", alignItems: "center" }}>
        <button onClick={toggleDarkMode} style={{ padding: "8px", marginRight: "10px", borderRadius: "20px", border: "none", backgroundColor: darkMode ? "white" : "black", color: darkMode ? "black" : "white" }}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        {user ? (
          <>
            <span style={{ marginRight: "10px" }}>{user}</span>
            <button onClick={handleLogout} style={{ padding: "8px", borderRadius: "20px", border: "none" }}>Logout</button>
          </>
        ) : (
          <button onClick={() => navigate("/login")} style={{ padding: "8px", borderRadius: "20px", border: "none" }}>Login</button>
        )}
      </div>
    </nav>
  );
}
