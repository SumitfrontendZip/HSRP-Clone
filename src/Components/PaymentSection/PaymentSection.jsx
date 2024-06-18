import { useEffect, useRef } from 'react';
import QRCode from 'qrcode.react';
import Navbar from '../Navbar/Navbar';
import SideSection from '../SideSection/SideSection';

const PaymentSection = () => {
    const qrCodeRef = useRef(null);
    useEffect(() => {
        console.log(qrCodeRef.current);
        const qrText = `upi://pay?pa=6583064674094f@mairtel&pn=hsrpbookonline&am=100&cu=INR`;
        if (qrCodeRef.current) {
            qrCodeRef.current.makeCode(qrText);
            console.log('ssssssssssssssssssssssssssssssssssssssssssssssssssssssssss');
        } else {
            console.error("QR Code ref is not available");
        }
    }, []);


    return (
        <>

            <Navbar />
          <div className="center">
          <SideSection />
            <div className="center">
                <div id="qrcode">
                    <QRCode
                        ref={qrCodeRef}
                        value="Initial QR code value"
                        size={256}
                        level="H"
                    />
                </div>
            </div>
          </div>
        </>

    );
};

export default PaymentSection;
