import { useRef } from "react";
import background from "../../kam-idris-_HqHX3LBN18-unsplash 1.png";

import "./Landing.css";

export default function Landing() {
  const shopRef = useRef(null);
  return (
    <div className="heroTitle">
      <img className="hero" src={background} alt="Landing Background" />
      <div className="CTA">
        <span className="CTAText">Patio Furniture</span>
        <button
          className="cartInteractionButton"
          onClick={() => {
            shopRef.current.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          SHOP
        </button>
        <span ref={shopRef}></span>
      </div>
    </div>
  );
}
