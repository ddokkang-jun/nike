import React from 'react';

const ProductAllPageProductCard = ({ item }) => {
  // console.log("item", item);
  return (
    <div className='card'>
      <img src={item?.imageAddress} alt="" />
      <h1>{item.title}</h1>
    </div>
  )
}

export default ProductAllPageProductCard;
