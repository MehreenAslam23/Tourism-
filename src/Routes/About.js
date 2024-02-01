import Navbar from '../Components/Navbar';
import HeroSection  from '../Components/HeroSection';
import aboutImg from '../Images/2.avif'
import Footer from '../Components/Footer';
import AboutUs from '../Components/AboutUs';
function About()
{
    return(
        <div>
            <Navbar></Navbar>
            <HeroSection
                cName="hero-about"
                heroImg = {aboutImg}
            ></HeroSection>
            <AboutUs></AboutUs>
            <Footer></Footer>
        </div>
    )
}
export default About