import React, { useEffect, useState } from 'react'

// 서브메뉴 컴포넌트
const SubMenubar = ({ hoveredMenu }) => {
  const [hoveredMenuName, setHoveredMenuName] = useState("men");
  const men = { shoesList: ["신발", "신발전체", "라이프스타일", "러닝", "농구", "트레이닝"], clothList: ["의류", "의류전체", "탑 & 티셔츠", "팬츠 & 타이츠", " 후디 & 크루", "재킷 & 베스트"] };
  const women = { shoesList: ["신발", "신발전체", "러닝", "워킹", "농구", "조던"], clothList: ["의류", "의류전체", "스포츠 브라", "타이츠 & 레깅스", "탑 & 티셔츠", "재킷 & 베스트"] };
  const kids = { shoesList: ["신발", "라이프스타일", "농구", "조던"], clothList: ["의류", "탑 & 티셔츠", "후디 & 크루"] };
  const sale = { mensSaleList: ["Mens Sale", "신발", "의류", "용품", "전체보기"], womenSaleList: ["Womens Sale", "신발", "의류", "용품", "전체보기"], kidsSaleList: ["Kids Sale", "신발", "의류", "용품", "전체보기"] };


  useEffect(() => {
    if (hoveredMenu !== null) {
      setHoveredMenuName(hoveredMenu);
    }
  }, [hoveredMenu, hoveredMenuName]);

  return (
    <div className='subMenubar'>
      <div>
        <ul className='subMenu-area'>
          {hoveredMenuName == "men" ? men.shoesList.map((menu, index) => (
            <li className='subMenu-list' key={index}>{menu}</li>
          )) : ""}
          {hoveredMenuName == "women" ? women.shoesList.map((menu, index) => (
            <li className='subMenu-list' key={index}>{menu}</li>
          )) : ""}
          {hoveredMenuName == "kids" ? kids.shoesList.map((menu, index) => (
            <li className='subMenu-list' key={index}>{menu}</li>
          )) : ""}
          {hoveredMenuName == "sale" ? sale.mensSaleList.map((menu, index) => (
            <li className='subMenu-list' key={index}>{menu}</li>
          )) : ""}
        </ul>
      </div>
      <div>
        <ul className='subMenu-area'>
          {hoveredMenuName == "men" ? men.clothList.map((menu, index) => (
            <li className='subMenu-list' key={index}>{menu}</li>
          )) : ""}
          {hoveredMenuName == "women" ? women.clothList.map((menu, index) => (
            <li className='subMenu-list' key={index}>{menu}</li>
          )) : ""}
          {hoveredMenuName == "kids" ? kids.clothList.map((menu, index) => (
            <li className='subMenu-list' key={index}>{menu}</li>
          )) : ""}
          {hoveredMenuName == "sale" ? sale.womenSaleList.map((menu, index) => (
            <li className='subMenu-list' key={index}>{menu}</li>
          )) : ""}
        </ul>
      </div>
      <div>
        <ul className='subMenu-area'>
          {hoveredMenuName == "sale" ? sale.kidsSaleList.map((menu, index) => (
            <li className='subMenu-list' key={index}>{menu}</li>
          )) : ""}
        </ul>
      </div>
    </div>
  )
}

export default SubMenubar
