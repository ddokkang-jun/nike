import React, { useEffect, useState } from 'react'

const ProductAllNavbar = ({ count }) => {

  let [scrollDirection, setScrollDirection] = useState('none');
  let [prevScrollY, setPrevScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY < prevScrollY) {
      setScrollDirection('down');
    } else if (currentScrollY > prevScrollY) {
      setScrollDirection('up');
    } else {
      setScrollDirection('none');
    }
    setPrevScrollY(currentScrollY);
  };

  // 스크롤링이벤트 발생할때마다 실행됨
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="productAllNavbar sticky-top bg-body-tertiary">
      <div className='container proudct-all-page-main'>
        <div className='productAllNavbar-title' style={{ fontSize: scrollDirection === 'up' ? '24px' : '16px' }}>NIKE MEN({count})</div>
        <div className='productAllNavbar-btn-area'>
          {/* <button className='productAllNavbar-filter-btn'>필터표시버튼</button> */}
          {/* 드롭다운메뉴 부트스트랩 */}
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown button
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default ProductAllNavbar;
