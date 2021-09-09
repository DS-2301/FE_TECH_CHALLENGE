import { useDispatch } from "react-redux";
import { removeItem } from "../../store/cart";

import "./CartItem.css";

export default function CartItem({ item, id }) {
  const dispatch = useDispatch();
  return (
    <div className="cartItem">
      <img
        src={item.imageURLs[1]}
        alt={item.itemName}
        className="cartItemImage"
      />
      <div className="cartItemInfo">
        <div>
          <p className="cartItemName">{item.itemName}</p>
          <p className="cartItemBrand">{item.vendorName}</p>
        </div>
        <span className="cartItemPrice">${item.MSRP}</span>
      </div>
      <button
        className="cartDeleteItemButton"
        onClick={() => {
          dispatch(removeItem(id));
        }}
      >
        {" "}
        &#10005;
      </button>
    </div>
  );
}
