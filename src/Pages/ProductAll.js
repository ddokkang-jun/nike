import React, { useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const ProductAll = () => {
  // const { id } = useParams();
  const [query, setQuery] = useSearchParams();

  useEffect(() => {
    console.log("query:", query);
  }, [query]);

  return (
    <div className='product-all-main-container'>
      <div className='container'>
        <h1>상품전체페이지</h1>
      </div>
    </div>
  )
}

export default ProductAll
