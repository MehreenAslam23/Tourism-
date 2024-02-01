import Navbar from '../Components/Navbar';
import HeroSection  from '../Components/HeroSection';
import contactImg from '../Images/5.avif'
import Footer from '../Components/Footer';
import ContactForm from '../Components/ContactForm';
function Contact()
{
    return(
        <div>
             <Navbar></Navbar>
            <HeroSection
                cName="hero-about"
                heroImg = {contactImg}
            ></HeroSection>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </div>
    )
}
export default Contact