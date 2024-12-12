import React from 'react'
import img1 from './images/1904671-arrow-arrow-right-change-direction-next-page-right_122521-photoaidcom-cropped.png'
const Cards = () => {
    
  return (
    <div>
      <div className='cards'>
      <div  className='box box1'>
      <div className='boxcontent'>
      
      <p>
      STRENGTH </p>
      <img src={img1} alt="" /> </div>
      </div>
<div className='box box2'>

<div className='boxcontent'>
<p>
          MOBILITY </p>       
          <img src={img1} alt="" />
          </div> 
      </div>
      <div className='box box3'>
        <div className='boxcontent'>
        <p> DRILLS
        </p>   <img src={img1} alt="" />     </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
