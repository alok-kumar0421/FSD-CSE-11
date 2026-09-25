import React from 'react'

const Saman = ({product}) => {
  return (
    <div className='saman'>
        <div>
        <img src={product.thumbnail}/>
        <h4>Title:{product.title}</h4>
        <h3>price:{product.price}</h3>
        <button>Add to cart</button>
        </div>
    </div>
  )
}

export default Saman