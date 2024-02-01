import Navbar from '../Components/Navbar';
import HeroSection  from '../Components/HeroSection';
import Destination from '../Components/Destination';
import Trip from '../Components/Trip';
import Footer from '../Components/Footer';
function Home()
{
    return(
        <div>
            <Navbar></Navbar>
            <HeroSection
                cName="hero"
                heroImg = 'https://images.unsplash.com/photo-1504836054726-3e36882ddaf9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                title= "Collect Moments, Not Things."
                text = "Choose your favourite destination Because Life is short, and the world is wide."
                btnText = "Travel Plan"
                url = '/'
                btnClass = 'show'
            ></HeroSection>
            <Destination></Destination>
            <Trip></Trip>
            <Footer></Footer>
        </div>
    )
}
export default Home