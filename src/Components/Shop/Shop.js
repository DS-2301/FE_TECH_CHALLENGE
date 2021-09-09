import { useSelector } from "react-redux";
import ShopItem from "../ShopItem/ShopItem";
import "./Shop.css";

export default function Shop() {
  const products = useSelector((state) => state.products);
  return (
    <div className="shopContent">
      {products.isFetching === true ? (
        <h1>loading</h1>
      ) : (
        Object.values(products).map((item) => {
          if (item) return <ShopItem item={item} key={item._id} />;
        })
      )}
    </div>
  );
}
