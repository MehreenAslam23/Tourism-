import '../Components/DestinationStyle.css'
import destImg1 from "../Images/7.jpg"
import destImg2 from "../Images/8.jpg"
import destImg3 from "../Images/9.jpg"
import destImg4 from "../Images/10.jpg"
import DestinationDynamic from './DestinationDynamic'
function Destination()
{
    return(
        <div className="dest-box">
            <div className="dest-head">
                <h1>Popular Destinations</h1>
                <p>The world is a book, and those who do not travel read only one page.</p>
            </div>
            <DestinationDynamic className="dest-body-1"
             heading = "Rome, Italy"
             text = "A standard stop on many European vacation itineraries, Rome is not to be missed. Italy’s capital city is a globally renowned cultural and historical powerhouse, boasting everything from ancient ruins and tranquil parks to Michelin-starred restaurants. Here, you'll find the most important relic from the Roman Empire (the Colosseum), some of Michelangelo's greatest works (in the Sistine Chapel), an 18th century Baroque-style fountain (the Trevi Fountain) and, of course, the center of Catholicism (Vatican City). Other can’t-miss tourist attractions in the Eternal City include the Pantheon, the Roman Forum and St. Peter’s Basilica, the world’s largest church."
             image1 = {destImg1}
             image2 = {destImg2}
            ></DestinationDynamic>
             <DestinationDynamic className="dest-body-2"
             heading = "Florence, Italy"
             text = "Situated in the scenic Tuscan valley, Florence woos travelers with old-world avenues leading to picturesque piazzas big and small. While you're soaking up the city's splendor, make sure to stop by the Piazza del Duomo, where the breathtaking Santa Maria del Fiore Cathedral is located, and the romantic Ponte Vecchio, a 14th century bridge overlooking the Arno River. Once central to the Renaissance movement, Florence also offers art aficionados the opportunity to see famous pieces by Michelangelo and other iconic artists of that period. As an added bonus, Florence is ideal for a daytrip to the Chianti wine region. "
             image1 = {destImg3}
             image2 = {destImg4}
            ></DestinationDynamic>
        </div>
    )
}
export default Destination