import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Button } from '@mui/material';
import SideSection from '../SideSection/SideSection';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

const AppointmentSlot = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (newDate) => {
        setSelectedDate(newDate);
    };

    const handleSubmit = () => {
        if (selectedDate) {
            console.log(selectedDate.format('YYYY-MM-DD'));
            // Example: Perform API call or further actions with selectedDate

            // Reset selectedDate after successful submission
            setSelectedDate(null);
        } else {
            alert("Please select a date before submitting.");
        }
    };

    return (
        <>
            <Navbar />
            <span className="steps">Step 3 - Appointment Slot</span>
            <div className="center">
                <SideSection />
                <div className='appointmentSlot'>
                    <h1>Appointment Slot</h1>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateCalendar
                            value={selectedDate}
                            onChange={handleDateChange}
                            renderInput={(props) => <input {...props} readOnly />}
                        />
                    </LocalizationProvider>
                    <Link to='/bookingSummary'><Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button></Link>
                </div>
            </div>
        </>
    );
};

export default AppointmentSlot;
