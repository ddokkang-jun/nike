import React from 'react'

// trending now banner
const BannerFifth = () => {
  return (
    <div>
      <div className='trending-now-title'>
        <h4>trending now</h4>
      </div>
      <div className='trending-now-area'>
        <div className='trending-relative card'>
          <img src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_482,c_limit/ba3a22fa-fea4-47a4-8bb1-d8be42d711aa/nike-just-do-it.jpg" alt="" />
          <div className='trending-absolute'>
            <h5>시스터후드 팩</h5>
            <button className='trending-btn'>구매하기</button>
          </div>
        </div>
        <div className='trending-relative card'>
          <img src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_482,c_limit/015ebc18-9fbf-48c1-8063-6558e75f3234/nike-just-do-it.jpg" alt="" />
          <div className='trending-absolute'>
            <h5>나이키 줌 플라이 5</h5>
            <button className='trending-btn'>구매하기</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerFifth;
