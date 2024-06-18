import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';
import img4 from './4.png';
import img5 from './5.png';
import img6 from './6.png';
import './Footer.css'
const images = [img1, img2, img3, img4, img5, img6];

const Footer = () => {
    const links = [
        'FAQ',
        'Privacy Policy',
        'Refund & Cancellation Policy',
        'Safe & Secure Transaction',
        'Terms & Conditions',
        'Government Notifications',
        'About HSRP',
        'Grievance Redressal',
        'Reprint Receipt'
    ];
    return (
        <>
            <div className='footerImage'>
                {images.map((img, index) => (
                    <img key={index} src={img} alt={`Image ${index + 1}`} />
                ))}
            </div>
            <div className='footer'>
              
                {links.map((link, index) => (
                    <span key={index}>{link}</span>
                ))}
            </div>
        </>
    );
}

export default Footer;
