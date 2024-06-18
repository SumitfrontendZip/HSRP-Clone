import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import SideSection from "../SideSection/SideSection";

const BookSummary = () => {
    return (
        <>
            <Navbar />

            <div className="center">
                <SideSection />

                <span className="steps">Step 4 - Book Summary</span>
                <div className="center">
                    <div className="booksummary">
                        <h2>Book Summary</h2>
                        <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid black' }}>
                            <thead>
                                <tr>
                                    <th colSpan="2" style={{ textAlign: 'left', backgroundColor: '#f2f2f2', padding: '10px' }}>
                                        Customer Details
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ width: '30%', padding: '10px', border: '1px solid black' }}>Plate Type</td>
                                    <td style={{ width: '70%', padding: '10px', border: '1px solid black' }}>Two Wheeler</td>
                                </tr>
                                <tr>
                                    <td style={{ width: '30%', padding: '10px', border: '1px solid black' }}>Number of Plates</td>
                                    <td style={{ width: '70%', padding: '10px', border: '1px solid black' }}>2</td>
                                </tr>
                                <tr>
                                    <td style={{ width: '30%', padding: '10px', border: '1px solid black' }}>State</td>
                                    <td style={{ width: '70%', padding: '10px', border: '1px solid black' }}>Chandigarh</td>
                                </tr>
                                <tr>
                                    <td style={{ width: '30%', padding: '10px', border: '1px solid black' }}>Vehicle Registration No</td>
                                    <td style={{ width: '70%', padding: '10px', border: '1px solid black' }}>sdf</td>
                                </tr>
                                <tr>
                                    <td style={{ width: '30%', padding: '10px', border: '1px solid black' }}>Name</td>
                                    <td style={{ width: '70%', padding: '10px', border: '1px solid black' }}>sdf</td>
                                </tr>
                                <tr>
                                    <td style={{ width: '30%', padding: '10px', border: '1px solid black' }}>Mobile No</td>
                                    <td style={{ width: '70%', padding: '10px', border: '1px solid black' }}>sdf</td>
                                </tr>
                                <tr>
                                    <td style={{ width: '30%', padding: '10px', border: '1px solid black' }}>E-mail ID</td>
                                    <td style={{ width: '70%', padding: '10px', border: '1px solid black' }}>sumitkumar992716@gmail.com</td>
                                </tr>
                                <tr>
                                    <td style={{ width: '30%', padding: '10px', border: '1px solid black' }}>Address</td>
                                    <td style={{ width: '70%', padding: '10px', border: '1px solid black' }}>sdf</td>
                                </tr>
                                <tr>
                                    <td style={{ width: '30%', padding: '10px', border: '1px solid black' }}>Price</td>
                                    <td style={{ width: '70%', padding: '10px', border: '1px solid black' }}>sdf</td>
                                </tr>
                            </tbody>
                        </table>
                        <Link to='/payment'><button>Submit</button></Link>
                    </div>
                </div>
            </div>

        </>
    );
}

export default BookSummary
