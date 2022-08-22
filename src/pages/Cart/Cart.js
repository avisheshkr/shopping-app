import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import "./cart.css";
import CartProducts from "../../components/CartProducts/CartProducts";
import Checkout from "../../components/Checkout/Checkout";

const Cart = () => {
  const { setIsCartPage, state } = useContext(CartContext);

  useEffect(() => {
    setIsCartPage(true);
  }, [setIsCartPage]);
  return (
    <div className="cart-container">
      {state.cartProducts.length > 0 ? (
        <CartProducts />
      ) : (
        <h2 style={{ flex: "4", textAlign: "center" }}>Cart is Empty!!!</h2>
      )}
      <Checkout />
    </div>
  );
};

export default Cart;
