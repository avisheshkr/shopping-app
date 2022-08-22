import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./products.css";

const Products = () => {
  const { state } = useContext(CartContext);

  return (
    <div className="products">
      {state.products.length > 0 ? (
        <>
          {state.products.map((product) => {
            return <SingleProduct product={product} key={product.id} />;
          })}
        </>
      ) : (
        <h2>No results found.</h2>
      )}
    </div>
  );
};

export default Products;
