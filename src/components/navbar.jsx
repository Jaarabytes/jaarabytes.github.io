import { useState } from "react";
import "./components.css";
import { Link } from "react-router-dom";

function Navbar(){
    const navItems = ["Home", "Posts", "About", "Tags"];
    // ADD SEARCH ICON AT THE END OF THE ARRAY
    const navLinks = {
        Home : "/",
        Posts: "/posts",
        About : "/about",
        Tags : "/tags"
    }
    // FOR RESPONSIVENESS
    const [isMenuOpen, setMenuOpen ] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    }

    // TOGGLE FOR LIGHT AND DARK MODE
    
    const [darkMode, setDarkMode] = useState("false");
    const toggleMode = () => {
        setDarkMode(!darkMode)
    }

    return(
        <nav className='p-4 flex justify-between items-center sticky top-0 shadow-lg z-50'>

            {/* {DESKTOP VERSION STARTS HERE} */}

            {/* {SHANKS IMAGE} */}
            <button className="inline-flex items-center"
            onClick={toggleMode}
            >
                <i className="fa-solid fa-moon text-3xl"></i>
            </button>

            {/* Mobile Menu Button */}
            <button
            className={`sm:hidden text-slate-900 focus:outline-none h-[50px] w-[50px]`}
            onClick={toggleMode}
            >
            <i
            className={`fas fa-bars text-slate-600 text-2xl`}
            ></i>
            </button>

            {/* {DESKTOP MENU...SHOULD ALIGN RIGHT} */}
            <ul className={`list-none p-0 sm:flex hidden`}>
                {navItems.map((elem, index) => (
                    <li key={index} className="block ml-4 p-3"><Link to={navLinks[elem]} className=" text-slate-900 text-lg">
                    {elem}    
                    </Link></li>
                ))}
            </ul>

            {/* {DESKTOP VERSION ENDS HERE} */}

            {/* Mobile Menu */}
            <div className={`transition duration-500 h-[100%] overflow-x-hidden fixed z-25 top-0 left-0 bg-slate-600/90 `}>
            <button className="absolute top-[45px] right-[45px]" onClick={toggleMenu}>
            <i className="fas fa-times text-2xl text-white"></i>
            </button>
            <ul
            className={`list-none p-0 ${
            isMenuOpen ? "w-96" : "w-0"
            } sm:hidden text-center relative top-[70px]`}
            >
            {navItems.map((elem, index) => (
            <li key={index} className="py-3">
              <Link
                to={navLinks[elem]} 
                className="hover:underline text-xl text-white"
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

export default Navbar;