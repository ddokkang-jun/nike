import React, { useEffect, useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import SubMenubar from './SubMenubar';

library.add(faCoffee, faCartShopping);

const NavigationBar = () => {
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

  const handleMenu = (menuName) => {
    // 네비게이션바에 마우스를 호버하면 해당 메뉴의 세브 메뉴가 보인다.
    setHoveredMenu(menuName);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.addEventListener('scroll', handleScroll);
    }
  }, [lastScrollY]);

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
                {menuList.map((menu, index) => (
                  <Link to='/men' key={index}>
                    <li className='shoppingMenu' aria-label={`${menu}`} onMouseOver={() => { handleMenu(menu) }}>{menu}</li>
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
