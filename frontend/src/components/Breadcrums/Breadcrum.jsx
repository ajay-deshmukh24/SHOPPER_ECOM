import "./Breadcrum.css";
import PropTypes from "prop-types";
import arrow_icon from "../Assets/breadcrum_arrow.png";

const Breadcrum = (props) => {
  const { category, name } = props;
  return (
    <div className="breadcrum">
      HOME <img src={arrow_icon} /> SHOP <img src={arrow_icon} /> {category}{" "}
      <img src={arrow_icon} /> {name}
    </div>
  );
};

Breadcrum.propTypes = {
  name: PropTypes.node.isRequired,
  category: PropTypes.node.isRequired,
};

export default Breadcrum;
