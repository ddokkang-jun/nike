import React from 'react';

const ProductAllPageProductCard = ({ item }) => {
  // console.log("item", item);
  return (
    <div className='card'>
      <img src={item?.imageAddress} alt="" />
      <h6>{item.title}</h6>
      <p>{item.price}</p>
    </div>
  )
}

export default ProductAllPageProductCard;
