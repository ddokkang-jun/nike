import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductAllPageProductCard from '../Component/ProductAllPageProductCard';

// 1. 전체상품데이터를 받아온다.(데이터를 한곳에 모으자.)
// => ProductAllData.js 파일을 만들고 파일들을 합치는 작업을 하자.
// 2. 넷바메뉴에서 전달된 데이터로 전체데이터에서 해당되는 상품들을 필터링해서 보여준다.
const ProductAll = () => {
  const { gender, productType } = useParams();
  let menShoes = useSelector((state) => state.product.menShoes);

  // console.log("gender:", gender, "/ productType: ", productType);
  // if (gender === "men") {
  //   console.log(true);
  //   console.log(menShoes[0].type);
  // }


  return (
    <div className='product-all-main-container'>
      <div className='container'>
        <div>여기다가 상품전체페이지 네비게이션바 추가할꺼임.</div>
        <Row>
          {menShoes.map((item) => (
            <Col md={4} sm={12} key={item.id}>
              <ProductAllPageProductCard item={item} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

export default ProductAll;
