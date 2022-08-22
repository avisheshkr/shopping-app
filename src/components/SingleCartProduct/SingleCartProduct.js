import "./singleCartProduct.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const SingleCartProduct = ({ product }) => {
  const { deleteCart, dispatch } = useContext(CartContext);

  let fullStarArray = [];
  let halfStarArray = [];

  for (let i = 0; i < product.rating; i++) {
    fullStarArray.push(i);
  }

  for (let i = 0; i < 5 - product.rating; i++) {
    halfStarArray.push(i);
  }

  return (
    <tr className="singleCartProduct">
      <td className="cart-product-image">
        <img src={product.imgUrl} alt="" />
      </td>
      <td>{product.title}</td>
      <td>Rs.{product.price}</td>
      <td>
        <span>
          {/*rating times aifillstar : 5 - rating times aioutlinestar */}
          {fullStarArray.map((rating, index) => {
            return <AiFillStar key={index} />;
          })}
          {halfStarArray.map((rating, index) => {
            return <AiOutlineStar key={index} />;
          })}
        </span>
      </td>
      <td>
        <button
          style={{
            padding: "0.5rem 1rem",
            background: "rgb(163, 35, 35)",
            border: "none",
            color: "#fff",
          }}
          onClick={() => {
            dispatch({ type: "DEC_QUANTITY", payload: product.id });
          }}
        >
          &minus;
        </button>
        <span style={{ margin: "0 1rem" }}>{product.qty}</span>
        <button
          style={{
            padding: "0.5rem 1rem",
            background: "green",
            border: "none",
            color: "#fff",
          }}
          onClick={() => {
            dispatch({ type: "ADD_QUANTITY", payload: product.id });
          }}
        >
          &#43;
        </button>
      </td>
      <td>
        <FaTrash
          style={{ cursor: "pointer" }}
          onClick={() => deleteCart(product)}
        />
      </td>
    </tr>
  );
};

export default SingleCartProduct;
