import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Shop from "./Components/Shop/Shop";
import { useEffect, useState } from "react";
import { fetchData } from "./store/utils/thunkCreators";
import { useDispatch, useSelector } from "react-redux";
import CartDrawer from "./Components/CartDrawer/CartDrawer";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const cart = useSelector((store) => store.cart);

  const [cartOpened, setCartOpened] = useState(false);

  const handleCart = () => {
    setCartOpened((prev) => !prev);
  };

  return (
    <div className="App">
      <div className="main">
        <Navbar handleCart={handleCart} />
        <CartDrawer show={cartOpened} cart={cart} />
        <div className="container">
          <Landing />
          <Shop />
        </div>
      </div>
    </div>
  );
}

export default App;
