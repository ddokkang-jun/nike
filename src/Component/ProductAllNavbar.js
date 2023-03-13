import React, { useEffect, useState } from 'react'

const ProductAllNavbar = ({ count }) => {

  let [scrollDirection, setScrollDirection] = useState('none');
  let [prevScrollY, setPrevScrollY] = useState(0);
  let [navbarHeight, setNavbarHeight] = useState(60);
  const [isOpen, setIsOpen] = useState(false); // 드롭다운버튼 state

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (event) => {
    let target = event.target.className;
    if (target !== "dropbtn") {
      setIsOpen(false);
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
  }, [])

  return (
    <nav nav className="productAllNavbar sticky-top" style={{ transform: `translateY(${navbarHeight}px)` }}>
      <div className='container proudct-all-page-main'>
        <div className='productAllNavbar-title' style={{ fontSize: scrollDirection === 'down' ? '24px' : '16px' }}>NIKE MEN({count})</div>
        <div className='productAllNavbar-btn-area'>
          <div className="dropdown">
            <button className="dropbtn" onClick={toggleDropdown}>
              정렬 기준
            </button>
            {isOpen && (
              <ul className="dropdown-content" style={{ top: '100%', opacity: '1' }}>
                <li><a href="#">높은 가격순</a></li>
                <li><a href="#">낮은 가격순</a></li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>

  )
}

export default ProductAllNavbar;
