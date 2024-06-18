import Footer from "../Footer/Footer"
import { Header } from "../Hearder/Header"
import Navbar from "../Navbar/Navbar"
import SectionContainer from "../Section/SectionContainer"
import advertisementTest from './advertisementTest.jpg'
import './Home.css'

export const Home = () => {
    return (
        <div className="home">
            <Header />
            <Navbar />
            <div className="homeImage">
                <img src={advertisementTest} alt="" />
            </div>
            <SectionContainer />
            <Footer />
        </div>
    )
}
