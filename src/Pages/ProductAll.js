import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductAllNavbar from '../Component/ProductAllNavbar';
import ProductAllPageProductCard from '../Component/ProductAllPageProductCard';

// 할 것 :
// 상품전체페이지 서브 네비게이션바 만들기 (필터기능도 있음, 높이도 살짝 변함, 글자크기도 살짝변함)
// 장바구니 페이지 구현
// 장바구니에 아이템이 추가되면 장바구니 아이콘에 뱃지 달아줘서 갯수 알려주기
// 상품들의 데이터에서 id를 각각 다르게 주기.
// 최상단의 메인메뉴가 클릭되면 서브메뉴를 안보이게 하기

// 에러 수정할것 :
// 메인홈 페이지에서 하단부분에 신발캐러셀부분을 클릭하고 디테일페이지로 이동하면 그페이지에서 새로고침 에러 수정하기
const ProductAll = () => {
  let menShoes = useSelector((state) => state.product.menShoes);
  let womenShoes = useSelector((state) => state.product.womenShoes);
  let kidsShoes = useSelector((state) => state.product.kidsShoes);
  let menCloth = useSelector((state) => state.product.menCloth);
  let womenCloth = useSelector((state) => state.product.womenCloth);
  let kidsCloth = useSelector((state) => state.product.kidsCloth);

  const { gender, productType } = useParams();
  let [showData, setShowData] = useState([]);
  let [count, setCount] = useState(0);

  // Fisher-Yates shuffle 알고리즘 : 배열의 요소를 무작위로 섞을 수 있습니다.
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  useEffect(() => {
    if (gender === 'men') {
      let copyMenShoes = [...menShoes];
      let copyMenCloth = [...menCloth];
      if (gender === 'men' && productType === undefined) {
        setShowData(shuffleArray([...copyMenShoes, ...copyMenCloth]));
        setCount([...copyMenShoes, ...copyMenCloth].length);
      } else if (gender === 'men' && productType === '신발') {
        setShowData(copyMenShoes);
        setCount(copyMenShoes.length);
      } else if (gender === 'men' && productType === '신발전체') {
        setShowData(copyMenShoes);
        setCount(copyMenShoes.length);
      } else if (gender === 'men' && productType === '라이프스타일') {
        setShowData(copyMenShoes.filter((item) => item.type === 'general'));
        setCount(copyMenShoes.filter((item) => item.type === 'general').length)
      } else if (gender === 'men' && productType === '러닝') {
        setShowData(copyMenShoes.filter((item) => item.type === '러닝'));
        setCount(copyMenShoes.filter((item) => item.type === '러닝').length);
      } else if (gender === 'men' && productType === '농구') {
        setShowData(copyMenShoes.filter((item) => item.type === '농구'));
        setCount(copyMenShoes.filter((item) => item.type === '농구').length);
      } else if (gender === 'men' && productType === '트레이닝') {
        setShowData(copyMenShoes.filter((item) => item.type === '트레이닝'));
        setCount(copyMenShoes.filter((item) => item.type === '트레이닝').length);
      } else if (gender === 'men' && productType === '의류') {
        setShowData(copyMenCloth);
        setCount(copyMenCloth.length);
      } else if (gender === 'men' && productType === '의류전체') {
        setShowData(copyMenCloth);
        setCount(copyMenCloth.length);
      } else if (gender === 'men' && productType === '탑 & 티셔츠') {
        setShowData(copyMenCloth.filter((item) => item.type === '탑' || item.type === '티셔츠'));
        setCount(copyMenCloth.filter((item) => item.type === '탑' || item.type === '티셔츠').length);
      } else if (gender === 'men' && productType === '팬츠 & 타이츠') {
        setShowData(copyMenCloth.filter((item) => item.type === '팬츠' || item.type === '타이츠'));
        setCount(copyMenCloth.filter((item) => item.type === '팬츠' || item.type === '타이츠').length);
      } else if (gender === 'men' && productType === '후디 & 크루') {
        setShowData(copyMenCloth.filter((item) => item.type === '후디'));
        setCount(copyMenCloth.filter((item) => item.type === '후디').length);
      } else if (gender === 'men' && productType === '재킷 & 베스트') {
        setShowData(copyMenCloth.filter((item) => item.type === '재킷'));
        setCount(copyMenCloth.filter((item) => item.type === '재킷').length);
      }
    } else if (gender === 'women') {
      let copyWomenShoes = [...womenShoes];
      let copyWomenCloth = [...womenCloth];
      if (gender === 'women' && productType === undefined) {
        setShowData(shuffleArray([...copyWomenShoes, ...copyWomenCloth]));
        setCount([...copyWomenShoes, ...copyWomenCloth].length);
      } else if (gender === 'women' && productType === '신발') {
        setShowData(copyWomenShoes);
        setCount(copyWomenShoes.length);
      } else if (gender === 'women' && productType === '신발전체') {
        setShowData(copyWomenShoes);
        setCount(copyWomenShoes.length);
      } else if (gender === 'women' && productType === '러닝') {
        setShowData(copyWomenShoes.filter((item) => item.type === '러닝'));
        setCount(copyWomenShoes.filter((item) => item.type === '러닝').length);
      } else if (gender === 'women' && productType === '워킹') {
        setShowData(copyWomenShoes.filter((item) => item.type === 'general'));
        setCount(copyWomenShoes.filter((item) => item.type === 'general').length);
      } else if (gender === 'women' && productType === '농구') {
        setShowData(copyWomenShoes.filter((item) => item.type === '농구'));
        setCount(copyWomenShoes.filter((item) => item.type === '농구').length);
      } else if (gender === 'women' && productType === '조던') {
        setShowData(copyWomenShoes.filter((item) => item.type === '조던'));
        setCount(copyWomenShoes.filter((item) => item.type === '조던').length);
      } else if (gender === 'women' && productType === '의류') {
        setShowData(copyWomenCloth);
        setCount(copyWomenCloth.length);
      } else if (gender === 'women' && productType === '의류전체') {
        setShowData(copyWomenCloth);
        setCount(copyWomenCloth.length);
      } else if (gender === 'women' && productType === '스포츠 브라') {
        setShowData(copyWomenCloth.filter((item) => item.type === '스포츠브라'));
        setCount(copyWomenCloth.filter((item) => item.type === '스포츠브라').length);
      } else if (gender === 'women' && productType === '타이츠 & 레깅스') {
        setShowData(copyWomenCloth.filter((item) => item.type === '타이츠'));
        setCount(copyWomenCloth.filter((item) => item.type === '타이츠').length);
      } else if (gender === 'women' && productType === '재킷 & 베스트') {
        setShowData(copyWomenCloth.filter((item) => item.type === '재킷' || item.type === '탑'));
        setCount(copyWomenCloth.filter((item) => item.type === '재킷' || item.type === '탑').length);
      } else if (gender === 'women' && productType === '팬츠') {
        setShowData(copyWomenCloth.filter((item) => item.type === '팬츠'));
        setCount(copyWomenCloth.filter((item) => item.type === '팬츠').length);
      }
    } else if (gender === 'kids') {
      let copyKidsShoes = [...kidsShoes];
      let copyKidsCloth = [...kidsCloth];
      if (gender === 'kids' && productType === undefined) {
        setShowData(shuffleArray([...copyKidsShoes, ...copyKidsCloth]));
        setCount(([...copyKidsShoes, ...copyKidsCloth]).length);
      } else if (gender === 'kids' && productType === '신발') {
        setShowData(copyKidsShoes);
        setCount(copyKidsShoes.length);
      } else if (gender === 'kids' && productType === '라이프스타일') {
        setShowData(copyKidsShoes.filter((item) => item.type === 'general'));
        setCount(copyKidsShoes.filter((item) => item.type === 'general').length);
      } else if (gender === 'kids' && productType === '농구') {
        setShowData(copyKidsShoes.filter((item) => item.type === '농구'));
        setCount(copyKidsShoes.filter((item) => item.type === '농구').length);
      } else if (gender === 'kids' && productType === '조던') {
        setShowData(copyKidsShoes.filter((item) => item.type === '조던'));
        setCount(copyKidsShoes.filter((item) => item.type === '조던').length);
      } else if (gender === 'kids' && productType === '의류') {
        setShowData(copyKidsCloth);
        setCount(copyKidsCloth.length);
      } else if (gender === 'kids' && productType === '탑 & 티셔츠') {
        setShowData(copyKidsCloth.filter((item) => item.type === '탑' || item.type === '티셔츠'));
        setCount(copyKidsCloth.filter((item) => item.type === '탑' || item.type === '티셔츠').length);
      } else if (gender === 'kids' && productType === '후디 & 크루') {
        setShowData(copyKidsCloth.filter((item) => item.type === '후디'));
        setCount(copyKidsCloth.filter((item) => item.type === '후디').length);
      } else if (gender === 'kids' && productType === '팬츠') {
        setShowData(copyKidsCloth.filter((item) => item.type === '팬츠'));
        setCount(copyKidsCloth.filter((item) => item.type === '팬츠').length);
      }
    } else if (gender === "sale") {
      let copyAllData = [...menShoes, ...menCloth, ...womenShoes, ...womenCloth, ...kidsShoes, ...kidsCloth];
      if (gender === 'sale' && productType === undefined) {
        setShowData(copyAllData.filter((item) => item.sale === true));
        setCount(copyAllData.filter((item) => item.sale === true).length);
      } else if (gender === 'sale' && productType === "Mens Sale") {
        setShowData(copyAllData.filter((item) => item.gender === "men" && item.sale === true));
        setCount(copyAllData.filter((item) => item.gender === "men" && item.sale === true).length);
      } else if (gender === 'sale' && productType === "남성 신발") {
        setShowData(copyAllData.filter((item) => item.gender === "men" && item.sale === true && item.productType === "shoes"));
        setCount(copyAllData.filter((item) => item.gender === "men" && item.sale === true && item.productType === "shoes").length);
      } else if (gender === 'sale' && productType === "남성 의류") {
        setShowData(copyAllData.filter((item) => item.gender === "men" && item.sale === true && item.productType === "cloth"));
        setCount(copyAllData.filter((item) => item.gender === "men" && item.sale === true && item.productType === "cloth").length);
      } else if (gender === 'sale' && productType === "남성 전체보기") {
        setShowData(copyAllData.filter((item) => item.gender === "men" && item.sale === true));
        setCount(copyAllData.filter((item) => item.gender === "men" && item.sale === true).length);
      } else if (gender === 'sale' && productType === "Womens Sale") {
        setShowData(copyAllData.filter((item) => item.gender === "women" && item.sale === true));
        setCount(copyAllData.filter((item) => item.gender === "women" && item.sale === true).length);
      } else if (gender === 'sale' && productType === "여성 신발") {
        setShowData(copyAllData.filter((item) => item.gender === "women" && item.sale === true && item.productType === "shoes"));
        setCount(copyAllData.filter((item) => item.gender === "women" && item.sale === true && item.productType === "shoes").length);
      } else if (gender === 'sale' && productType === "여성 의류") {
        setShowData(copyAllData.filter((item) => item.gender === "women" && item.sale === true && item.productType === "cloth"));
        setCount(copyAllData.filter((item) => item.gender === "women" && item.sale === true && item.productType === "cloth").length);
      } else if (gender === 'sale' && productType === "여성 전체보기") {
        setShowData(copyAllData.filter((item) => item.gender === "women" && item.sale === true));
        setCount(copyAllData.filter((item) => item.gender === "women" && item.sale === true).length);
      } else if (gender === 'sale' && productType === "Kids Sale") {
        setShowData(copyAllData.filter((item) => item.gender === "kids" && item.sale === true));
        setCount(copyAllData.filter((item) => item.gender === "kids" && item.sale === true).length);
      } else if (gender === 'sale' && productType === "kids 신발") {
        setShowData(copyAllData.filter((item) => item.gender === "kids" && item.sale === true && item.productType === "shoes"));
        setCount(copyAllData.filter((item) => item.gender === "kids" && item.sale === true && item.productType === "shoes").length);
      } else if (gender === 'sale' && productType === "kids 의류") {
        setShowData(copyAllData.filter((item) => item.gender === "kids" && item.sale === true && item.productType === "cloth"));
        setCount(copyAllData.filter((item) => item.gender === "kids" && item.sale === true && item.productType === "cloth").length);
      } else if (gender === 'sale' && productType === "kids 전체보기") {
        setShowData(copyAllData.filter((item) => item.gender === "kids" && item.sale === true));
        setCount(copyAllData.filter((item) => item.gender === "kids" && item.sale === true).length);
      }
    }
  }, [gender, productType, count]);

  return (
    <div className='product-all-main-container'>
      <ProductAllNavbar count={count} />
      <div className='container'>
        <Row>
          {showData.map((item, index) => (
            <Col md={4} sm={12} key={index}>
              <ProductAllPageProductCard item={item} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

export default ProductAll;
