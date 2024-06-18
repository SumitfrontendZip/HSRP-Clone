import './BookingSection.css';
import Navbar from '../Navbar/Navbar';
import BookingDetails from '../BookingDetails/BookingDetails';
import { SideSection } from '../SideSection/SideSection';

const BookingSection = () => {
   

    return (
        <>
            <Navbar />
            <div className='bookingSection'>
                <SideSection/>
                <BookingDetails />
            </div>
        </>
    );
};

export default BookingSection;
