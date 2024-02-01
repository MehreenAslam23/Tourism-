import ContactForm from './ContactForm'
import Footer from './Footer'
import Navbar from './Navbar'
import signupImg2 from '../Images/15.jpeg'
import './signupstyle.css'
function Signup(){
    return(
        <>
        <Navbar></Navbar>
        <div className='signup-container'>
            <div className='left'>
                <h1>Talk to us!</h1>
                <p>We help you grow your personality with planing different tours for YOU. Let’s have a chat and find out how we can help you in your goals.</p>
            </div>
            <div className='right'>
                <img src={signupImg2}></img>
            </div>
        </div>
        <ContactForm></ContactForm>
        <Footer></Footer>
        </>
    )
}
export default Signup