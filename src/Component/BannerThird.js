import React from 'react'

const BannerThird = () => {
  return (
    <div className='card'>
      <img src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1200,c_limit/ef8dca05-082c-48ce-9410-7bff6f40a00c/a-feel-for-every-you.jpg" alt="" />
      <div className='banner-description'>
        <h1>나이키 젠비 레깅스를 만나보세요.</h1>
        <div className='banner-p'>
          <span>부드러운 지지력과 구름이 감싸 주는 듯한 편안함을 가진 나이키 젠비 레깅스를 소개합니다.</span>
          <span>단 한 번의 착용만으로도 부드럽고 뛰어난 내구성을 느낄 수 있습니다.</span>
          <span>매일 입고 싶은 편안함을 경험해 보세요.</span>
        </div>
        <button className='banner-btn'>구매하기</button>
      </div>
    </div>
  )
}

export default BannerThird
