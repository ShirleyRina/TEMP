import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1> My Personal Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        {/* 里面的括号指代JS下的object */}
        <Link
          to="/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
