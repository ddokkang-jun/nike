import React, { useEffect, useState } from 'react'

// 홈화면 최하단에 있는 메뉴 컴포넌트임
const ProductAllMenu = () => {
  const featured = ["에어 포스1", "조던 1", "에어맥스 97", "에어맥스 90", "블레이저", "리액트", "페가수스"];
  const shoes = ['전체 보기', '조던 신발', '러닝 신발', '농구 신발', '테니스 신발', '트레이닝 신발', 'Sale 신발'];
  const cloth = ['탑 & 티셔츠', '쇼츠', '후디 & 풀오버', '조거 & 스웻팬츠', '스포츠 브라', '팬츠 & 타이츠', '양말', '요가', 'NikeLab', 'Sale 의류',];
  const kids = ['베이비 신발', '키즈 신발', '키즈 농구 신발', '키즈 러닝 신발', '키즈 조던 신발', '키즈 의류', '키즈 백팩', '키즈 양말', 'Sale 키즈',];
  const [show, setShow] = useState(false);

  const hoverControl = (event) => {
    let target = event.target.className;
    if (target === 'product-all-menu-list' || target === "product-all-menu-area" || target === "product-all-menu-title") {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener('mouseover', (e) => {
      hoverControl(e);
    })

    return () => {
      window.removeEventListener('mouseover', (e) => {
        hoverControl(e);
      })
    }

  }, []);

  return (
    <div>
      <div className='container'>
        <div className='product-all-menu-container' style={show ? { height: "100%" } : { height: "270px" }}>
          <div className='product-all-menu-area'>
            <h4 className='product-all-menu-title'>featured</h4>
            <ul>
              {featured.map((item, index) => (
                <li className='product-all-menu-list' key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className='product-all-menu-area'>
            <h4 className='product-all-menu-title'>신발</h4>
            <ul className='product-all-menu-list'>
              {shoes.map((item, index) => (
                <li className='product-all-menu-list' key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className='product-all-menu-area'>
            <h4 className='product-all-menu-title'>의류</h4>
            <ul className='product-all-menu-list'>
              {cloth.map((item, index) => (
                <li className='product-all-menu-list' key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className='product-all-menu-area'>
            <h4 className='product-all-menu-title'>kids</h4>
            <ul className='product-all-menu-list'>
              {kids.map((item, index) => (
                <li className='product-all-menu-list' key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductAllMenu;
