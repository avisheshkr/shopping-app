import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import "./checkout.css";

const Checkout = () => {
  const { state, dispatch } = useContext(CartContext);

  useEffect(() => {
    dispatch({ type: "TOTAL_AMOUNT" });
  }, [state.cartProducts, dispatch]);

  return (
    <div className="cart-checkout">
      <h2>Subtotal ({state.cartProducts.length}) Items</h2>
      <h3>Total: Rs.{state.totalAmount}</h3>
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Checkout;
