import "./About-us.css";
import Header from "../../shared/Header/Header";
import Footer from "../../shared/Footer/Footer";
import { FaClock, FaLeaf, FaSearch, FaHeart } from 'react-icons/fa';
import { GiFruitBowl } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
function About() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <main>
        <section className="hero-about">
          <h1>About Healthy Recip Finder</h1>
          <p>We believe healthy eating should be easy, enjoyable, and accessible to everyone. Our mission is to help you discover simple, wholesome recipes that fit your lifestyle and make every meal delicious.</p>
        </section>
        <section className="features">
          <div className="feature-container">
            <span><FaClock /></span>
            <h3>Fast & Simple Recipes</h3>
            <p>Discover quick recipes that are easy to make and perfect for busy lifestyles.</p>
          </div>
          <div className="feature-container">
            <span><FaLeaf /></span>
            <h3>Healthy Ingredients</h3>
            <p>Cook with fresh, wholesome ingredients that make every meal nutritious and delicious.</p>
          </div>
          <div className="feature-container">
            <span><FaSearch /></span>
            <h3>Cook with Confidence</h3>
            <p>Follow clear, step-by-step instructions designed for cooks of every skill level.</p>
          </div>
          <div className="feature-container">
            <span><FaHeart /></span>
            <h3>Made with Love</h3>
            <p>Every recipe is carefully selected to inspire enjoyable cooking and memorable meals with family and friends.</p>
          </div>
        </section>
        <section className="green">
          <div className="icon-circle"><GiFruitBowl /></div>
          <div className="talk">
            <h1>Cooking should be joyful, not stressful.</h1>
            <p>We believe great meals begin with simple ingredients, clear guidance, and a passion for sharing delicious food with everyone.</p>
            <button onClick={() => navigate("/recipes")} id="last">Browse recipes</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
export default About