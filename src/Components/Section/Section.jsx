import arrowIcon from './right-arrow.png'
import { Link } from 'react-router-dom'
const Section = ({ val }) => {
    return (
        <div className='containerBox'>
            <span>{val}</span>
            <Link to='./orderPlace'>
                <button className='btn'>
                    <span>Book</span>
                    <img src={arrowIcon} alt="" />
                </button>
            </Link>
        </div>
    )
}

export default Section
