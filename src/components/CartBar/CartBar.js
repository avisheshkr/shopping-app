import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./cartbar.css";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartBar = () => {
  const { state, deleteCart, showCartbar } = useContext(CartContext);

  // const removeFromCart = (id) => {
  // setCartProducts(cartProducts.filter((product) => product.id !== id));
  // console.log(id);
  //   setItemCount((prev) => prev - 1);
  // };

  return (
    <>
      <div className="cartbar">
        {state.cartProducts.length === 0 ? (
          <h2>Cart is empty!</h2>
        ) : (
          <>
            <div className="cartbar-items">
              {state.cartProducts.map((product) => {
                const { id, imgUrl, price, title } = product;
                return (
                  <div key={id} className="cart-item-container">
                    <div className="cart-item">
                      <div className="cart-image">
                        <img src={imgUrl} alt={title} />
                      </div>
                      <div className="cart-price">
                        <span>{title}</span>
                        <span>Rs.{price}</span>
                      </div>
                    </div>
                    <span
                      className="cart-delete"
                      onClick={() => {
                        deleteCart(product);
                        showCartbar();
                      }}
                    >
                      <FaTrash />
                    </span>
                  </div>
                );
              })}
            </div>
            <Link to="/cart" className="cart-btn">
              Go to Cart
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default CartBar;
