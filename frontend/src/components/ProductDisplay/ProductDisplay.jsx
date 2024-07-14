import "./ProductDisplay.css";
import PropTypes from "prop-types";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const ProductDisplay = (props) => {
  const { id, image, name, new_price, old_price, category } = props;

  console.log(id);
  console.log(image);
  console.log(new_price);
  console.log(old_price);
  console.log(category);

  const { addToCart } = useContext(ShopContext);

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={image} />
          <img src={image} />
          <img src={image} />
          <img src={image} />
        </div>
        <div className="productdisplay-img">
          <img src={image} className="productdisplay-main-img" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} />
          <img src={star_icon} />
          <img src={star_icon} />
          <img src={star_icon} />
          <img src={star_dull_icon} />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">${old_price}</div>
          <div className="productdisplay-right-price-new">${new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          A lightweight, usually knitted, pullover shirt, close-fitting and with
          a round neckline and short sleeves, worn as an undershirt or outer
          garment
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={() => addToCart(id)}>ADD TO CART</button>
        <p className="productdisplay-right-category">
          <span>Category : </span>
          {category}, T-shirt, Jeans
        </p>
        <p className="productdisplay-right-category">
          <span>Tags : </span>#Modern #Latest
        </p>
      </div>
    </div>
  );
};

ProductDisplay.propTypes = {
  image: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired,
  new_price: PropTypes.node.isRequired,
  old_price: PropTypes.node.isRequired,
  category: PropTypes.node.isRequired,
  id: PropTypes.node.isRequired,
};

export default ProductDisplay;
