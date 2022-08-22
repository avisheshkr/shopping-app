import { useContext } from "react";
import "./singleproduct.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { CartContext } from "../../context/CartContext";

const SingleProduct = ({ product }) => {
  const { id, imgUrl, title, price, deliveryTime, rating, stock } = product;
  const { state, addCart, deleteCart } = useContext(CartContext);

  let fullStarArray = [];
  let halfStarArray = [];

  for (let i = 0; i < rating; i++) {
    fullStarArray.push(i);
  }

  for (let i = 0; i < 5 - rating; i++) {
    halfStarArray.push(i);
  }

  return (
    <>
      <div
        className={
          (!state.isChecked && stock === "no") ||
          (state.isFastChecked && deliveryTime !== "Fast")
            ? "hide single-product"
            : "single-product"
        }
      >
        <div className="product-image">
          <img src={imgUrl} alt={title} />
        </div>
        <div className="product-desc">
          <h3>{title}</h3>
          <span>Rs. {price}</span>
          <span>{deliveryTime} Delivery</span>
          <span>
            {/*rating times aifillstar : 5 - rating times aioutlinestar */}
            {fullStarArray.map((rating, index) => {
              return <AiFillStar key={index} />;
            })}
            {halfStarArray.map((rating, index) => {
              return <AiOutlineStar key={index} />;
            })}
          </span>
          {stock === "yes" ? (
            <>
              {state.cartProducts.some((p) => p.id === id) ? (
                <button
                  style={{ backgroundColor: "rgb(163, 35, 35)" }}
                  onClick={() => deleteCart(product)}
                >
                  Remove from Cart
                </button>
              ) : (
                <button
                  onClick={() => {
                    addCart(product);
                  }}
                >
                  Add to Cart
                </button>
              )}
            </>
          ) : (
            <button
              disabled={true}
              style={{
                cursor: "no-drop",
                backgroundColor: "rgb(114, 175, 236)",
              }}
            >
              Out Of Stock
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default SingleProduct;

// !ischecked && product.stock ==== 'no'
// display: none;
