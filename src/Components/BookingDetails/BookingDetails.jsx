import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import Navbar from "../Navbar/Navbar";

const BookingDetails = () => {
    const [captchaInput, setCaptchaInput] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [registrationNumber, setRegistrationNumber] = useState('');
    const [name, setName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const statesOfIndia = [
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttar Pradesh",
        "Uttarakhand",
        "West Bengal"
    ];

    const handleValidCaptcha = () => {
        if (validateCaptcha(captchaInput)) {
            alert("Captcha is valid");
        } else {
            alert("Captcha is not valid");
        }
    };

    

    return (
        <>
            <span className="steps">Step 1 - Booking Details</span>
            <div className="bookingdetails">
                <div className="bookingInformation">
                    <h1>Booking Details</h1>

                    <div className="inputBox">
                        <span>
                            <label htmlFor="State">State</label>
                            <select 
                                value={selectedState} 
                                onChange={(e) => setSelectedState(e.target.value)}
                            >
                                <option value="">Select State</option>
                                {statesOfIndia.map((state, index) => (
                                    <option key={index} value={state}>
                                        {state}
                                    </option>
                                ))}
                            </select>
                        </span>

                        <span>
                            <label htmlFor="Registration Number">Registration Number</label>
                            <input 
                                type="text" 
                                placeholder="DLXXAZXXXX" 
                                value={registrationNumber}
                                onChange={(e) => setRegistrationNumber(e.target.value)}
                            />
                        </span>

                        <span>
                            <label htmlFor="YourName">Name</label>
                            <input 
                                type="text" 
                                placeholder="Enter Your Name" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </span>

                        <span>
                            <label htmlFor="Number">Mobile Number</label>
                            <input 
                                type="text" 
                                placeholder="Enter Your Mobile Number" 
                                value={mobileNumber}
                                onChange={(e) => setMobileNumber(e.target.value)}
                            />
                        </span>

                        <span>
                            <label htmlFor="captcha">Captcha:</label>
                            <span className="margin"><LoadCanvasTemplate /></span>
                        </span>

                        <span>
                            <label htmlFor="captchaInput">Input Captcha:</label>
                            <input
                                type="text"
                                value={captchaInput}
                                onChange={(e) => setCaptchaInput(e.target.value)}
                            />
                        </span>
                    </div>
                    <Link to='/fitmentLocation'><button onClick={handleValidCaptcha}>Submit</button></Link>
                </div>
            </div>
        </>
    );
}

export default BookingDetails;
