import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const ProductsCarousel = () => {
  let products = useSelector((state) => state.product.value);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <div className='headline-featured-shoes'><h3>Featured Shoes</h3></div>
      <Carousel responsive={responsive} infinite={true} autoPlay={true}>
        {products
          ? products.map((item, i) => <ProductCard item={item} key={i} />)
          : "로딩중"}
      </Carousel>
    </div>
    
  );
};

export default ProductsCarousel;
