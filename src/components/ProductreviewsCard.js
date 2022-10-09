import React from 'react'
import "./styles/ProductreviewsCard.css"

const ProductreviewsCard = ({image,index,review,name,price}) => {
  return (
    <div className='ProductreviewsCard'>
        <img src={image} alt={`${index} review`}/>
        <h5>{review}</h5>
        <span>{name}</span>
        <b>{price}</b>
        
    </div>
  )
}

export default ProductreviewsCard