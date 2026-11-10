
function Navbar() {
  const navStyle = {
    backgroundColor: "#166534",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 40px",
    flexWrap: "wrap",
    gap: "15px"
  };

  const logoStyle = {
    fontSize: "24px",
    fontWeight: "bold"
  };

  const listStyle = {
    display: "flex",
    listStyle: "none",
    gap: "25px",
    margin: 0,
    padding: 0,
    flexWrap: "wrap"
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "16px"
  };

  return (
    <nav style={navStyle}>
      <div style={logoStyle}>StudentHub</div>

      <ul style={listStyle}>
        <li><a href="#home" style={linkStyle}>Home</a></li>
        <li><a href="#about" style={linkStyle}>About</a></li>
        <li><a href="#services" style={linkStyle}>Services</a></li>
        <li><a href="#contact" style={linkStyle}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
