
export const SideSection = () => {
    const listBooking = [
        'Step 1 - Booking Details',
        'Step 2 - Fitment Location',
        'Step 3 - Appointment Slot',
        'Step 4 - Booking Summary',
        'Step 5 - Verify Details & Pay',
        'Step 6 - Download Receipt'
    ];
    return (
        <>
            <div className="listBooking">
                {listBooking.map((item, index) => (
                    <div key={index} className="listBookingItem">
                        <span>{item}</span>
                    </div>
                ))}
            </div>
        </>
    )
}
export default SideSection