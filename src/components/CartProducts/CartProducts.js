import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import SingleCartProduct from "../SingleCartProduct/SingleCartProduct";
import "./cartProducts.css";

const CartProducts = () => {
  const { state } = useContext(CartContext);

  return (
    <div className="cart-products">
      <table>
        <tbody>
          {state.cartProducts.map((product) => {
            return <SingleCartProduct key={product.id} product={product} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CartProducts;
