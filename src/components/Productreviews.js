import React from 'react'
import ProductreviewsCard from "./ProductreviewsCard.js"
import "../styles/Productreviews.css"

const Productreviews = ({productReviews}) => {
  return (
    <div className='Productreviews'>
    {productReviews.map((item,index) => (
        <ProductreviewsCard key={item.image} price = {item.price} name={item.name} image = {item.image} review={item.review} index={index} />
    ))}

    </div>
  )
}

export default Productreviews