import React from 'react'
import "../styles/VideosCard.css"

const playButton =<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M8.3 36.3q-1.9-2.25-2.975-5.025Q4.25 28.5 4.05 25.5h3.1q.25 2.35 1.1 4.55.85 2.2 2.35 4ZM4.05 21.5q.1-3 1.225-5.75T8.3 10.7l2.3 2.25Q9.15 14.85 8.275 17 7.4 19.15 7.15 21.5Zm18 22.05q-2.95-.4-5.7-1.4-2.75-1-5.1-2.75l2.3-2.4q1.9 1.3 4.05 2.225t4.45 1.325ZM13.65 10l-2.4-2.4q2.4-1.8 5.175-2.775Q19.2 3.85 22.2 3.45v3q-2.35.4-4.5 1.275Q15.55 8.6 13.65 10Zm5.7 22.05v-17.1l13.4 8.55Zm6.85 11.5v-3q6.4-.95 10.6-5.775Q41 29.95 41 23.5t-4.2-11.275Q32.6 7.4 26.2 6.45v-3q7.7.75 12.75 6.525T44 23.5q0 7.75-5.05 13.5T26.2 43.55Z"/></svg>
const VideosCard = ({image,name,index}) => {
  return (
    <div className='VideosCard' style={{background:`url(${image})`}}>
        <a href="#/">{playButton}</a>
        <p>{name}</p>

    </div>
  )
}

export default VideosCard