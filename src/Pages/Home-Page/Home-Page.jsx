import './Home-Page.css'
import Header from "../../shared/Header/Header";
import Footer from "../../shared/Footer/Footer";
import wave from '../../assets/wave.svg'
import motivation from '../../assets/motivation.avif'
import manCooking from '../../assets/man-cooking.avif'
import { GiCarrot } from 'react-icons/gi'
import { FaBolt } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from "react-router-dom";
function Home() { 
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <h1><span>Healthy</span> meals, zero fuss</h1>
          <p>Discover eight quick, whole-food recipes that you can tonight</p>
          <p id='pusher'>-no processed junk, no guesswork</p>
          <button onClick={ () =>
             navigate("/recipes")
            }
          >Start exploring</button>
        </section>
        <section className="picture">
          <img className="wave-bg-left" src={wave} />
          <img className="wave-bg-right" src={wave} />
          <img src={manCooking} />
        </section>
        <section className="adds">
          <h1>What you'll get</h1>
          <div className='adds-container'>
            <div className='topic'>
              <div className="icon-badge orange"><GiCarrot /></div>
              <h2>Whole food recipes</h2>
              <p>Each dish uses everyday, unprocessed ingredients</p>
            </div>
            <div className='topic'>
              <div className="icon-badge green"><FaBolt /></div>
              <h2>Minimum Fuss</h2>
              <p>All recipes are designed to make eating healthy quick and easy</p>
            </div>
            <div className='topic'>
              <div className="icon-badge purple"><FaSearch /></div>
              <h2>Whole food recipes</h2>
              <p>Each dish uses everyday, unprocessed ingredients</p>
            </div>
          </div>
        </section>
        <section className='motivation'>
          <div className='motivation-text'>
            <h1>Built for real life</h1>
            <p>
              Coocking shouldn't be complicated these recipes come in under <span>30 minutes</span> of active time , fit busy shecdules , and taste good enough to repeat .
            </p>
            <p>
              Whether you're new to the kitchen or just need fresh ideas, we've got you covered.
            </p>
          </div>
          <img src={motivation} />
        </section>
      </main>
      <Footer />
    </>
  )
}
export default Home