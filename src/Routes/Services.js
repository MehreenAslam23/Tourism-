import Navbar from '../Components/Navbar';
import HeroSection  from '../Components/HeroSection';
import servicesImg from '../Images/4.avif'
import Footer from '../Components/Footer';
import Trip from '../Components/Trip';
function Services()
{
    return(
        <div>
            <Navbar></Navbar>
            <HeroSection
                cName="hero-about"
                heroImg = {servicesImg}
            ></HeroSection>
            <Trip></Trip>
            <Footer></Footer>
        </div>
    )
}
export default Services