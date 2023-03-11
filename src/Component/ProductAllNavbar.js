import React from 'react'

const ProductAllNavbar = ({ count }) => {
  return (
    <div className='container proudct-all-page-main'>
      <div className='product-all-container'>
        <div className='product-all-navbar-area'>
          <div>NIKE MEN({count})</div>
          <div>filter btn</div>
        </div>
      </div>
    </div>
  )
}

export default ProductAllNavbar
