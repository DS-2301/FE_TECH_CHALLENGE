import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <a className="logo" href="/">
        {" "}
        Fülhaus Shop
      </a>
      <button className="cartInteractionButton">CART</button>
    </div>
  );
}
