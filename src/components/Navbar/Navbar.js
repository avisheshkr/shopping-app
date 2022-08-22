import { useContext } from "react";
import { BiCartAlt, BiChevronDown, BiX } from "react-icons/bi";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CartBar from "../CartBar/CartBar";
import "./navbar.css";

const Navbar = () => {
  const { state, showCartbar, handleChange, dispatch, isCartPage } =
    useContext(CartContext);

  return (
    <div className="navbar">
      <Link to="/">
        <h1>Shopping Cart</h1>
      </Link>
      <form className={isCartPage ? "vis_off" : "vis_on"}>
        <input
          type="text"
          placeholder="Search a product..."
          onChange={(e) => handleChange(e.target.value)}
          value={state.input}
        />
        {state.input && (
          <BiX
            style={{
              position: "absolute",
              top: "50%",
              right: "0",
              transform: "translateY(-50%)",
              color: "black",
              fontSize: "2rem",
            }}
            onClick={() => {
              dispatch({ type: "CLEAR_INPUT" });
            }}
          />
        )}
      </form>

      <div className="carts" onClick={showCartbar}>
        <BiCartAlt />
        {state.cartProducts.length}
        <BiChevronDown />
        {state.openCartBar && <CartBar />}
      </div>
    </div>
  );
};

export default Navbar;
