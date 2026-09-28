import "./Header.css";

function Header({ storeName }) {
  return (
    <header className="header">
      <h1 className="header-title">{storeName}</h1>
      <nav className="header-nav">
        <a href="#">Home</a>
        <a href="#">Games</a>
        <a href="#">Deals</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}

export default Header;