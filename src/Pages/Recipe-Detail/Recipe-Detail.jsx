import "./Recipe-Detail.css";
import Header from "../../shared/Header/Header";
import Footer from "../../shared/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa';
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom'
import { FaClock, FaFire, FaUsers, FaSnowflake } from 'react-icons/fa';
function RecipeDetail() {
  const navigate = useNavigate();
  const [recipeDetail, setrecipeDetail] = useState(null);
  const { id } = useParams();
  const getDifficulty = (cookTime) => {
    if (cookTime <= 0 || cookTime === null) return 'Not Mentioned'
    if (cookTime <= 25) return 'Easy'
    if (cookTime <= 50) return 'Medium'
    return 'Hard'
  }
  const nutrients = recipeDetail?.nutrition?.nutrients || []
  const calories = nutrients.find(n => n.name === 'Calories')
  const protein = nutrients.find(n => n.name === 'Protein')
  const carbs = nutrients.find(n => n.name === 'Carbohydrates')
  const fat = nutrients.find(n => n.name === 'Fat')
  const fiber = nutrients.find(n => n.name === 'Fiber')
  useEffect(() => {
    axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${import.meta.env.VITE_API_KEY}&includeNutrition=true`)
      .then(response => setrecipeDetail(response.data))
  }, []);

  return (
    <>
      <Header />
      <main>
        <button id="back-btn" onClick={() => navigate(-1)}>
          <FaArrowLeft /> Back to recipes
        </button>
        {recipeDetail && (
          <>
            <div id="recipe-hero">
              <img src={recipeDetail.image} />
              <div id="recipe-hero-overlay">
                <h1>{recipeDetail.title}</h1>
                <div className="informer">
                  <p>Healthy</p>
                  <p>Quick</p>
                  <p>{recipeDetail.readyInMinutes} min</p>
                </div>
              </div>
            </div>
            <div className="extra-informations">
              <div id="big">
                <div id="head">
                  <div className="item-big">
                    <FaClock />
                    <div className="data">
                      <p>Prep Time</p>
                      <p><p>{`${recipeDetail.cookingMinutes > 0 ? recipeDetail.cookMinutes : Math.round(recipeDetail.readyInMinutes / 2)} min`}</p></p>
                    </div>
                  </div>
                  <div className="item-big">
                    <FaFire />
                    <div className="data">
                      <p>Cook Time</p>
                      <p><p>{`${recipeDetail.cookingMinutes > 0 ? recipeDetail.cookingMinutes : Math.round(recipeDetail.readyInMinutes / 2)} min`}</p></p>
                    </div>
                  </div>
                  <div className="item-big">
                    <FaUsers />
                    <div className="data">
                      <p>Servings</p>
                      <p>{recipeDetail.servings}</p>
                    </div>
                  </div>
                  <div className="item-big">
                    <FaSnowflake />
                    <div className="data">
                      <p>Difficulty</p>
                      <p>{getDifficulty(recipeDetail.cookingMinutes)}</p>
                    </div>
                  </div>
                </div>
                <h4>About this recipe</h4>
                <p id="summery">
                  {recipeDetail.summary
                    .replace(/<[^>]*>/g, '')
                    .slice(0, 300)
                    .trimEnd()
                    .replace(/\s+\S*$/, '') + '...'
                  }
                </p>
                <h4>Ingredients</h4>
                <ul>
                  {recipeDetail.extendedIngredients.map((ingredient) => (
                    <li key={ingredient.id}>{ingredient.original}</li>
                  ))}
                </ul>
                <h4>Instructions</h4>
                {recipeDetail.analyzedInstructions?.length > 0 &&
                  recipeDetail.analyzedInstructions[0].steps.map((instruction) => (
                    <div key={instruction.number} className="do">
                      <p><span>{instruction.number}</span> {instruction.step}</p>
                    </div>
                  ))
                }
              </div>
              <div id="small">
                <h4>Nutrition (per serving) </h4>
                <p>Calories: <span className="nutrition-value">{calories?.amount} kcal</span></p>
                <p>Protein: <span className="nutrition-value">{protein?.amount} g</span></p>
                <p>Carbs: <span className="nutrition-value">{carbs?.amount} g</span></p>
                <p>Fat: <span className="nutrition-value">{fat?.amount} g</span></p>
                <p>Fiber: <span className="nutrition-value">{fiber?.amount} g</span></p>
              </div>
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  )
}
export default RecipeDetail