import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { SideSection } from "../SideSection/SideSection";
import { Link } from "react-router-dom";
import { LoadCanvasTemplate, loadCaptchaEnginge } from "react-simple-captcha";

const FitmentLocation = () => {
    const [captcha, setCaptcha] = useState(Math.floor(1000 + Math.random() * 9000));
    const [captchaInput, setCaptchaInput] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [name, setName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [city, setCity] = useState('');
    const [pincode, setPincode] = useState('');

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
        if (parseInt(captchaInput) === captcha) {
            alert("Captcha is valid");
        } else {
            alert("Captcha is not valid");
        }
    };

    return (
        <>
            <Navbar />
             <div className="center">
                <SideSection />
                <div className="bookingdetails">
                    <span className="steps">Step 2 - Fitment Location</span>
                    <div className="bookingInformation">
                        <h1>Fitment Location</h1>

                        <div className="inputBox">
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
                                <label htmlFor="City">City</label>
                                <input
                                    type="text"
                                    placeholder="Enter Your City"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </span>
                            <span>
                                <label htmlFor="PinCode">PinCode</label>
                                <input
                                    type="text"
                                    placeholder="Enter Your Pincode"
                                    value={pincode}
                                    onChange={(e) => setPincode(e.target.value)}
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
                        <Link to='/appointmentSlot'><button onClick={handleValidCaptcha}>Submit</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FitmentLocation;
