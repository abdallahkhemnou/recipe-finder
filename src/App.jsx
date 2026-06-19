import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home-Page/Home-Page.jsx";
// import RecipePage from "./Pages/Recipe-Page/Recipe-Page";
// import RecipeDetail from "./Pages/Recipe-Detail/Recipe-Detail";
// import About from "./Pages/About-us/About-us";
import './App.css'
function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </>
  )
}

export default App
