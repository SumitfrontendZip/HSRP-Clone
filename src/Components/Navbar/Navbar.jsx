import LogoIcon from './logo-icon.png'
import login from './login.jpg'
import './Navbar.css'
import menuIcon from './hamburger.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
      <Link to='/'>
          <nav>
            <div className="logo">
                <img src={LogoIcon} alt="" />
                <span>Coporate Profile</span>
            </div>
            <div className="navItems">
                <span>Track Your Order</span>
                <span>Reschedule Appointment</span>
                <span>Cancel Order</span>
                <span>Check For Home Installation</span>
                <span>Receipt Validity</span>
                <span>Contact US</span>
            </div>
            <img src={login} alt="" className='login'/>
            <img src={menuIcon} alt="" className='menuIcon'/>
        </nav>
      </Link>
    )
}
export default Navbar