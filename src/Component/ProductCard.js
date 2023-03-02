import React from "react";
import { Card } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSuggestShoes } from '../Store/productSlice.js';
import suggestData from '../suggestData.js';
import { setSelectProductSize,setSizeSelectWarning } from "../Store/productSlice";

const ProductCard = ({ item }) => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const showProductDetail = () => {
    window.scroll(0,0);
    
    // 상품사이즈 리셋 해주는 코드
    dispatch(setSizeSelectWarning(true));
    dispatch(setSelectProductSize(0));

    dispatch(setSuggestShoes(suggestData));
    navigate(`/detail/${item.id}`);
  }
  return (
    <div className='card' onClick={showProductDetail}>
      <Card.Img
        variant='top'
        src={item.imageAddress}
      />
      <Card.Body>
        <div>
          <h6>{item.title}</h6>
          <h6 className='item-content'>{item.content}</h6>
          <h6>{item.price / 1000},000원</h6>
        </div>
      </Card.Body>
    </div>
  );
};

export default ProductCard;
