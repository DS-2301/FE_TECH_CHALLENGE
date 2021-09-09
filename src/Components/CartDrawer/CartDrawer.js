import CartItem from "../CartItem/CartItem";
import "./CartDrawer.css";

export default function CartDrawer(props) {
  const { cart, show } = props;
  let cartClasses = "cartDrawer";
  if (show) {
    cartClasses = "cartDrawer open";
  }
  return (
    <div className={cartClasses}>
      <div className="cartContent">
        {Object.values(cart.items).length === 0 && (
          <h1 className="noItemsMessage">There are no items yet</h1>
        )}
        {Object.values(cart.items).map((item, index) => {
          return (
            <CartItem
              item={item}
              key={item._id + index}
              id={Object.keys(cart.items)[index]}
            />
          );
        })}
      </div>
      <div className="totalPrice">
        <span>Total:</span>
        <span>${cart.total}</span>
      </div>
      <button className="cartInteractionButton checkoutButton">CHECKOUT</button>
    </div>
  );
}
