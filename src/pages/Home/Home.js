import { useContext, useEffect } from "react";
import FilterBar from "../../components/FilterBar/FilterBar";
import Products from "../../components/Products/Products";
import { CartContext } from "../../context/CartContext";
import "./home.css";

const Home = () => {
  const { setIsCartPage } = useContext(CartContext);

  useEffect(() => {
    setIsCartPage(false);
  }, [setIsCartPage]);

  return (
    <div className="home">
      <FilterBar />
      <Products />
    </div>
  );
};

export default Home;
