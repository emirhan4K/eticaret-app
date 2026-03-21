import React from 'react'
import '../css/Product.css'

function Product({product}) {

    const {id, price , image , title ,description} = product;

  return (
    <div className='card'>
        <img className='image' src={image} alt="" />
        <div>
            <p>{title}</p>
            <h3>{price} $</h3>
        </div>

        <div>
            <button className='detail-button'>Detayına git</button>
        </div>

    </div>
  )
}

export default Product