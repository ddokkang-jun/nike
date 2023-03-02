import React from "react";
import Slideshow from './Slideshow';

const Banner = () => {
  return (
    <div>
      <Slideshow />
      <div className='banner-description'>
        <h1>a feel for every you</h1>
        <div className='banner-p'>
          <span>몸과 마음이 좋아하는 나만의 다양한 움직임을 시작해보세요.</span>
          <span>머리부터 발끝까지 모든 감각들을 깨워, 기분 좋은 하루를 보낼 수 있는 에너지를 만들 수 있어요.</span>
          <span>지금 나를 위한 모든 가능성을 느껴보세요.</span>
        </div>
        <button className='banner-btn'>구매하기</button>
      </div>
    </div>
  );
};

export default Banner;
