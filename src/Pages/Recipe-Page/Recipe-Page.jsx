import './Recipe-Page.css'
import Header from "../../shared/Header/Header";
import Footer from "../../shared/Footer/Footer";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useState, useEffect } from "react";
import axios from 'axios';
import { FaUser, FaClock, FaUtensils } from 'react-icons/fa';
function RecipePage() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [maxPrep, setMaxPrep] = useState('');
  const [maxCook, setMaxCook] = useState('');
  useEffect(() => {
    axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&number=50&addRecipeInformation=true`)
      .then(response => setRecipes(response.data.results))
  }, []);
  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(search.toLowerCase())
    const matchesPrep = maxPrep === '' || recipe.preparationMinutes <= Number(maxPrep)
    const matchesCook = maxCook === '' || recipe.cookingMinutes <= Number(maxCook)
    return matchesSearch && matchesPrep && matchesCook
  })
  return (
    <>
      <Header />
      <main>
        <section className="recipes-hero">
          <h1>Explore our simple, healthy recipes</h1>
          <p>Discover eight quick, whole-food dishes that fit real-life schedules and tastes amazing. Use the search bar to find a recipe by name or ingredient, or simply scroll the list and let something delicious catch your eye.</p>
        </section>
        <section className="filters">
          <div>
            <select id='first' value={maxPrep} onChange={(e) => setMaxPrep(e.target.value)}>
              <option value="">Max Prep Time</option>
              <option value="10">10 min</option>
              <option value="20">20 min</option>
              <option value="30">30 min</option>
            </select>
            <select value={maxCook} onChange={(e) => setMaxCook(e.target.value)}>
              <option value="">Max Cook Time</option>
              <option value="10">10 min</option>
              <option value="20">20 min</option>
              <option value="30">30 min</option>
            </select>
          </div>
          <div className="search">
            <input
              type="text"
              placeholder="Search by name or ingredient ..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <FaMagnifyingGlass id='search-icon'/>
          </div>
        </section>
        <section className="recipes-grid">
          {filteredRecipes.map((recipe) => (
            <div key={recipe.id} className='recipe-container'>
              <img src={recipe.image}/>
              <h3>{recipe.title}</h3>
              <p className='summery'>
                {recipe.summary
                  .replace(/<[^>]*>/g, '')
                  .slice(0, 100)
                  .trimEnd()
                  .replace(/\s+\S*$/, '') + '...'}
              </p>
              <div className='icons'>
                <p><FaUser /> servings : {recipe.servings}</p>
                <p><FaClock /> prep : {recipe.preparationMinutes > 0 ? `${recipe.preparationMinutes} mins` : 'N/A'}</p>
              </div>
              <p><FaUtensils /> cook : {recipe.cookingMinutes} min</p>
              <button>View Recipe</button>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  )
}
export default RecipePage