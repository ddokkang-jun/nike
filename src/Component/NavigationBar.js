import React, { useEffect, useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import SubMenubar from './SubMenubar';
import { useDispatch, useSelector } from 'react-redux';
import { setMainNavbarMenuClicked } from '../Store/productSlice';

library.add(faCoffee, faCartShopping);

const NavigationBar = () => {
  let dispatch = useDispatch();
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [subShow, setSubShow] = useState(false);
  const menuList = ["men", "women", "kids", "sale"];
  const [hoveredMenu, setHoveredMenu] = useState("");

  const handleHover = (event) => {
    let target = event.target.className;
    if (target == "shoppingMenu" || target == "product-list" || target == "subMenubar" || target == "subMenu-area" || target == "subMenu-list") {
      setSubShow(true);
    } else {
      setSubShow(false);
    }
  }

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  // 네비게이션바에 마우스를 호버하면 해당 메뉴의 세브 메뉴가 보인다.
  const handleMenu = (menuName) => {
    setHoveredMenu(menuName);
  }

  // 클릭이벤트핸들러
  const handleClick = () => {
    setSubShow(false);
  }

  // 메인 넷바에서 스크롤이벤트가 발생하면 아래코드 실행됨
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.addEventListener('scroll', handleScroll);
    }
  }, [lastScrollY]);

  // 메인 넷바에서 호버이벤트발생하면 아래코드 실행됨
  useEffect(() => {
    window.addEventListener('mouseover', function (event) {
      handleHover(event);
    });

    return () => {
      window.removeEventListener('mouseover', function (event) {
        handleHover(event);
      });
    }
  }, [])

  return (
    <div>
      <Navbar bg='light' variant='light' className={`${show ? 'show-navbar' : 'hidden-navbar'}`}>
        <Container>
          <div className='nav-line'>
            <div className='nav-left-area'>
              <Link to='/'>
                <img
                  width={100}
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png'
                  alt='' />
              </Link>
            </div>
            <div className='product-list-area'>
              <ul className='product-list'>
                {/* 상품전체페이지로 이동하게 됨 */}
                {menuList.map((menu, index) => (
                  <Link to={`/productAll/${menu}`} key={index}>
                    <li className='shoppingMenu'
                      aria-label={`${menu}`}
                      onClick={() => { handleClick() }}
                      onMouseOver={() => { handleMenu(menu) }}>{menu}</li>
                  </Link>
                ))}
              </ul>
            </div>
            <div className='nav-right-area'>
              <Link to='/cart'>
                <FontAwesomeIcon icon="fa-cart-shopping" />
              </Link>
            </div>
          </div>
        </Container>
        {subShow == true ? <SubMenubar hoveredMenu={hoveredMenu} /> : ""}
      </Navbar>
    </div>
  );
};

export default NavigationBar;
