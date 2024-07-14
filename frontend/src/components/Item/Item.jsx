import { Link } from "react-router-dom";
import "./Item.css";
import PropTypes from "prop-types";

const Item = (props) => {
  const { id, image, name, new_price, old_price } = props;

  return (
    <div className="item">
      <Link to={`/product/${id}`}>
        <img src={image} onClick={window.scrollTo(0, 0)} />
      </Link>
      <p>{name}</p>
      <div className="item-prices">
        <div className="item-price-new">${new_price}</div>
        <div className="item-price-old">${old_price}</div>
      </div>
    </div>
  );
};

Item.propTypes = {
  image: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired,
  new_price: PropTypes.node.isRequired,
  old_price: PropTypes.node.isRequired,
  id: PropTypes.node.isRequired,
  // item: PropTypes.object.isRequired,
};

export default Item;
