import React from 'react'
import VideosCard from "./VideosCard.js"
import "../styles/Videos.css"

const Videos = ({video}) => {
  return (
    <div className='Videos'>
        {video.map((item,index) => (
            <VideosCard key={item.image} image={item.image} name={item.name} index={index} />
        ))}
    </div>
    
  )
}

export default Videos