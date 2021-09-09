import "./Navbar.css";

export default function Navbar({ handleCart }) {
  return (
    <div className="navbar">
      <a className="logo" href="/">
        {" "}
        Fülhaus Shop
      </a>
      <button className="cartInteractionButton" onClick={() => handleCart()}>
        CART
      </button>
    </div>
  );
}
