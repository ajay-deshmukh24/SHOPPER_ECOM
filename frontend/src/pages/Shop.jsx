import Hero from "../components/Hero/Hero";
import NewCollections from "../components/NewCollections/NewCollections";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import Offers from "../components/Offers/Offers";
import Popular from "../components/Popular/Popular";

const Shop = () => {
  return (
    <div>
      <Hero></Hero>
      <Popular></Popular>
      <Offers></Offers>
      <NewCollections></NewCollections>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Shop;
