import { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../context/ShopContext";
import PropTypes from "prop-types";
import dropdown_icon from "../components/Assets/dropdown_icon.png";
import Item from "../components/Item/Item";

const ShopCategory = ({ category, banner }) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={banner} />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (item.category === category) {
            return (
              <Item
                key={i}
                id={item.id}
                image={item.image}
                name={item.name}
                new_price={item.new_price}
                old_price={item.old_price}
              ></Item>
            );
          } else return null;
        })}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};

ShopCategory.propTypes = {
  category: PropTypes.node.isRequired,
  banner: PropTypes.node.isRequired,
};

export default ShopCategory;
