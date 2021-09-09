import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Shop from "./Components/Shop/Shop";
import { useEffect } from "react";
import { fetchData } from "./store/utils/thunkCreators";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="App">
      <div className="main">
        <Navbar />
        <div className="container">
          <Landing />
          <Shop />
        </div>
      </div>
    </div>
  );
}

export default App;
