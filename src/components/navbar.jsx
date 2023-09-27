import "./components.css";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

function Navbar({toggleDarkMode, darkMode, toggleMenu, isMenuOpen}){
    const navItems = ["Home", "Posts", "About", "Tags"];
    // ADD SEARCH ICON AT THE END OF THE ARRAY
    const navLinks = {
        Home : "/",
        Posts: "/posts",
        About : "/about",
        Tags : "/tags"
    }
    // TOGGLE FOR LIGHT AND DARK MODE
    
    return(
        <nav className={`p-4 flex justify-between items-center sticky top-0 shadow-lg z-100`}>

            {/* {DESKTOP VERSION STARTS HERE} */}

            {/* {SHANKS IMAGE} */}
            <button className="inline-flex items-center sm:hidden"
            onClick={toggleDarkMode}
            >
                <i className={`${darkMode ? 'fa-solid fa-moon' : 'fa-solid fa-sun'} hover:text-neon text-3xl`}></i>
            </button>

            {/* Mobile Menu Button */}

            {/* SHOULD ALIGN RIGHT */}
            <button
            className={`sm:hidden h-[50px] w-[50px]`}
            onClick={toggleMenu}
            >
            <i
            className={`fas fa-bars text-slate-600 text-2xl hover:text-neon`}
            ></i>
            </button>

            {/* {DESKTOP MENU} */}
            <ul className={`list-none p-0 sm:flex hidden`}>
                {navItems.map((elem, index) => (
                    <li key={index} className="block ml-4 p-3"><Link to={navLinks[elem]} className="text-lg hover:underline hover:text-neon">
                    {elem}    
                    </Link></li>
                ))}
            </ul>

            {/* {DESKTOP VERSION ENDS HERE} */}

            {/* Mobile Menu */}
            <div className={`transition duration-500 h-[100%] overflow-x-hidden fixed z-25 top-0 left-0 bg-slate-600/90 ${isMenuOpen ? 'w-full' : 'w-0'} `}>
            <button className="absolute top-[45px] right-[45px]" onClick={toggleMenu}>
            <i className="fas fa-times text-2xl text-white"></i>
            </button>
            <ul
            className={`list-none p-0 sm:hidden text-center relative top-[70px]`}
            >
            {navItems.map((elem, index) => (
            <li key={index} className="py-3">
              <Link
                to={navLinks[elem]} 
                className="text-xl text-white hover:underline hover:text-neon"
              >
                {elem}
              </Link>
            </li>
            ))}
            </ul>
            </div>

        </nav>
    )
}
Navbar.propTypes = {
    toggleDarkMode: PropTypes.func.isRequired,
    darkMode: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
    isMenuOpen: PropTypes.bool.isRequired
}
export default Navbar;