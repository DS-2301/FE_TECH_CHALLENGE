import { useDispatch } from "react-redux";
import { addItem } from "../../store/cart";
import "./ShopItem.css";

export default function ShopItem({ item }) {
  const dispatch = useDispatch();
  return (
    <div className="itemCard">
      <img src={item.imageURLs[0]} alt={item.itemName} className="cardImage" />
      <div className="productDescription">
        <div className="descSection">
          <span className="productName">{item.itemName}</span>
          <span className="productBrand">{item.vendorName}</span>
        </div>
        <div className="cardFooter">
          <button className="addToCart" onClick={() => dispatch(addItem(item))}>
            + Add to Cart
          </button>
          <span className="price">{item.MSRP} $</span>
        </div>
      </div>
    </div>
  );
}
