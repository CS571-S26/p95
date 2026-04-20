export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        <a className="navbar-brand" href="#/">UW Madison GSCC</a>
        <div className="navbar-nav">
          <a className="nav-link" href="#/">Home</a>
          <a className="nav-link" href="#/library">Community Lending Library</a>
        </div>
      </div>
    </nav>
  );
}