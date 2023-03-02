import React from 'react'

// apparel essentials banner
const BannerSeventh = () => {
  return (
    <div>
      <div className='trending-now-title'>
        <h4>apparel essentials</h4>
      </div>
      <div className='trending-now-area'>
        <div className='trending-relative card'>
          <img src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_467,c_limit/c1cdc101-116b-4c01-ad62-2d564afca8eb/nike-just-do-it.png" alt="" />
          <div className='trending-absolute'>
            <h5>재킷 & 베스트</h5>
          </div>
        </div>
        <div className='trending-relative card'>
          <img src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_467,c_limit/e7d2127d-fe56-4cef-81ab-2086dd44847c/nike-just-do-it.png" alt="" />
          <div className='trending-absolute'>
            <h5>후디 & 크루</h5>
          </div>
        </div>
        <div className='trending-relative card'>
          <img src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_467,c_limit/e2d07435-96aa-45d2-b10e-5a96c579fcbb/nike-just-do-it.png" alt="" />
          <div className='trending-absolute'>
            <h5>팬츠 & 타이츠</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerSeventh;
