import './Tripstyle.css'
import image11 from '../Images/11.jpg'
import image12 from '../Images/12.avif'
import image13 from '../Images/13.avif'
function Trip() {
  return (
    <div>
      <div className="trip-div">
        <div className="trip-head">
          <h2>Plan a Trip</h2>
          <p>
            Embark on an Italian journey, exploring ancient wonders in Rome,
            gliding through Venice's canals, immersing in Florence's artistry,
            relaxing on the Amalfi Coast's stunning beaches, and uncovering
            Sicily's rich history and natural wonders. Experience the essence of
            Italy through diverse landscapes, captivating history, and timeless
            beauty.
          </p>
        </div>
        <div className='trip-body'>
            <div className='trip-card'>
                <div className='trip-img'>
                    <img src={image11}></img>
                </div>
                <h3>Tour in Cagliari</h3>
                <p>Get to know the city through the eyes of a local guide. With no set itinerary, you can customize the tour or leave it to the local for an enlightening introduction to the city. With our private walking tours, you'll skip the mundane historical tours and experience the city through the eyes of a real local.</p>
            </div>
            <div className='trip-card'>
                <div className='trip-img'>
                    <img src={image12}></img>
                </div>
                <h3> Coastal Paradise</h3>
                <p>The Amalfi Coast welcomed us with the pastel beauty of Positano's beaches and the historic allure of Amalfi's cathedral. Ravello, perched high above the coast, offered breathtaking views of the Mediterranean, creating a serene backdrop to our coastal escapade is popular in country</p>
            </div>
            <div className='trip-card'>
                <div className='trip-img'>
                    <img src={image13}></img>
                </div>
                <h3>Sicily Island of Wonders</h3>
                <p>Sicily's diverse landscapes unfolded as we explored Palermo's rich history, from the Norman Palace to vibrant markets. A daring adventure led us to Mount Etna, Europe's highest volcano, while the charm of Taormina, with its ancient Greek theater, offered panoramic views of the Ionian Sea in the Island</p>
            </div>
        </div>
      </div>
    </div>
  );
}
export default Trip;
