import React from 'react'
import arrowIcon from './right-arrow.png'
const Section = ({ val }) => {
    return (
        <div className='containerBox'>
            <span>{val}</span>
            <button className='btn'><span>Book</span><img src={arrowIcon} alt="" /></button>
        </div>
    )
}

export default Section
