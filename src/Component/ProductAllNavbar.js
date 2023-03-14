import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setProductSortWay } from '../Store/productSlice';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useParams } from 'react-router-dom';


const ProductAllNavbar = ({ count }) => {

  const { gender, productType } = useParams();
  let dispatch = useDispatch();
  let [scrollDirection, setScrollDirection] = useState('none');
  let [prevScrollY, setPrevScrollY] = useState(0);
  let [navbarHeight, setNavbarHeight] = useState(60);
  const [isOpen, setIsOpen] = useState(false); // 드롭다운버튼 state
  let productAllPageNavbarTitle = useSelector((state) => state.product.productAllPageNavbarTitle);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (event) => {
    let target = event.target.className;
    
    if (target !== "dropbtn") {
      setIsOpen(false);     // dropbtn 버튼이 아닌 다른데를 클릭하면 드롭메뉴가 닫히는 코드 
    };

    if (target === 'high') {
      dispatch(setProductSortWay(target));
    } else if (target === 'low') {
      dispatch(setProductSortWay(target));
    }
  };

  const handleScroll = () => {
    let currentScrollY = window.scrollY;
    if (currentScrollY < prevScrollY) {
      setScrollDirection('up');
      // console.log("올라감");
      setNavbarHeight(60);
    } else if (currentScrollY > prevScrollY) {
      setScrollDirection('down');
      // console.log("내려감");
      setIsOpen(false);
      setNavbarHeight(0);
    } else if (currentScrollY === 0 || prevScrollY === 0) {
      setScrollDirection('none');
      setNavbarHeight(0);
    }
    setPrevScrollY(currentScrollY);
  };

  // 스크롤링이벤트 발생할때마다 실행됨
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY]);

  useEffect(() => {
    window.addEventListener('click', (e) => handleClick(e));
    return () => window.removeEventListener('scroll', (e) => handleClick(e));
  }, []);

  return (
    <nav className="productAllNavbar sticky-top" style={{ transform: `translateY(${navbarHeight}px)` }}>
      <div className='container proudct-all-page-main'>
        <div className='productAllNavbar-title' style={{ fontSize: scrollDirection === 'down' ? '24px' : '16px' }}>{gender} {productType}({count})</div>
        <div className='productAllNavbar-btn-area'>
          <div className="dropdown">
            <button className="dropbtn" onClick={toggleDropdown}>
              정렬 기준:
            </button>
            <FontAwesomeIcon icon={faChevronDown} className={isOpen ? 'rotate' : 'rotate-back'} />
            {isOpen && (
              <ul className="dropdown-content" style={{ top: '100%', opacity: '1' }}>
                <li className='high'><a className='high' href="#">높은 가격순</a></li>
                <li className='low'><a className='low' href="#">낮은 가격순</a></li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>

  )
}

export default ProductAllNavbar;
