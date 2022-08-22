import "./filterbar.css";
// import { BiStar } from "react-icons/bi";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const FilterBar = () => {
  const {
    sortByAsc,
    sortByDesc,
    includeOutofstock,
    showFastDelivery,
    clearFilters,
  } = useContext(CartContext);

  return (
    <div className="filterbar">
      <h2>Filter Products</h2>
      <form
        className="filters"
        onSubmit={(e) => {
          e.preventDefault();
          e.target.reset();
          clearFilters();
        }}
      >
        <div>
          <input
            type="radio"
            id="ascending"
            name="sorting"
            value="ascending"
            onClick={sortByAsc}
          />
          <label htmlFor="ascending">Ascending</label>
        </div>
        <div>
          <input
            type="radio"
            id="descending"
            name="sorting"
            value="descending"
            onClick={sortByDesc}
          />
          <label htmlFor="descending">Descending</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="outOfStock"
            name="outOfStock"
            value=""
            onClick={() => {
              includeOutofstock();
            }}
          />
          <label htmlFor="outOfStock">Include out of stock</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="fastDelivery"
            name="fastDelivery"
            value=""
            onClick={showFastDelivery}
          />
          <label htmlFor="fastDelivery">Fast Delivery Only</label>
        </div>
        {/* <div>
          <span>Rating: </span>
          <span className="stars">
            <BiStar />
            <BiStar />
            <BiStar />
            <BiStar />
            <BiStar />
          </span>
        </div> */}
        <button type="submit">Clear Filters</button>
      </form>
    </div>
  );
};

export default FilterBar;
