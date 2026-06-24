import './Header.css'
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  return (
    <>
      <div className="header">
        <div className="brand">
          <img src={logo} alt="logo" width={36} height={36} />
          <h3>Healthy Recipe Finder</h3>
        </div>
        <div className="senders">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/recipes">Recipes</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
        <button id="browse-recipes"
         onClick={() => 
           navigate('/recipes')
         }
        >Browse Recipes</button>
      </div>
    </>
  )
}
export default Header