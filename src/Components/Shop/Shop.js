import { useSelector } from "react-redux";
import ShopItem from "../ShopItem/ShopItem";
import "./Shop.css";

export default function Shop() {
  const products = useSelector((state) => state.products);
  const loadingProducts = Array(6).fill("loading");
  return (
    <div className="shopContent">
      {products.isFetching === true
        ? loadingProducts.map((item, index) => {
            return <ShopItem item={item} key={index} />;
            // usage of index in this case appropriate because it's unique and predicted
          })
        : Object.values(products).map((item) => {
            if (item) return <ShopItem item={item} key={item._id} />;
            return null;
          })}
    </div>
  );
}
