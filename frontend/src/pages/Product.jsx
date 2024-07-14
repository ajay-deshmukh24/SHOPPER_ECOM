import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import Breadcrum from "../components/Breadcrums/Breadcrum";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../components/RelatedProducts/RelatedProducts";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breadcrum name={product.name} category={product.category}></Breadcrum>
      <ProductDisplay
        id={product.id}
        image={product.image}
        name={product.name}
        new_price={product.new_price}
        old_price={product.old_price}
        category={product.category}
      ></ProductDisplay>
      <DescriptionBox></DescriptionBox>
      <RelatedProducts></RelatedProducts>
    </div>
  );
};

export default Product;
