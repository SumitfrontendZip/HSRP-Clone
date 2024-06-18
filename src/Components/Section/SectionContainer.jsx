import './Section.css'
import arrowIcon from './right-arrow.png'
import Section from './Section'
import { Link } from 'react-router-dom'
const SectionContainer = () => {
    const data = [' Replacement/Retain/Transfer', 'High Security Registration Plate For Electric Vehicle', 'High Security Registration Plate For Tractor & Trailer', 'Only Colour Sticker', 'Track Your Order', 'Grievance Redressal']
    return (

        <div className="section-container">
            <div className="container">
                <div className="containerBox">
                    <span>High Security Registration Plate with Colour Sticker</span>
                    <Link to='./orderPlace'> <button className='btn'><span>Book</span><img src={arrowIcon} alt="" /></button></Link>

                </div>
                {
                    data.map((val, index) => {
                        return (
                            <Section key={index} val={val} />
                        )
                    })
                }
            </div>
        </div>

    )
}

export default SectionContainer
