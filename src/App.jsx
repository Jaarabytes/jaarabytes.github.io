import './App.css';
import Navbar from './components/navbar';
import Profile from './components/profile';
import About from './components/about';
import Tags from './components/tags';
import PostsTab from './components/postsTab';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import Error404 from './components/error404';
import { useDarkModeToggle } from './components/toggleDarkMode';
import { Responsive } from './components/responsive';
import Post1 from '../public/posts/post1';
import Post2 from '../public/posts/post2';
import Footer from './components/footer';
import gitTag from '../public/tags/git/git';

function App() {
  // TOGGLING BETWEEN LIGHT AND DARK MODE
  const [darkMode, toggleDarkMode] = useDarkModeToggle();
  const containerClassName = darkMode ? 'darker' : 'lighter';
  // FOR RESPONSIVENESS
  const [isMenuOpen, toggleMenu] = Responsive();

  return (
    <div className={ containerClassName } style={{minHeight:'100vh'}}>
    <Router >
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Routes>
        <Route path="/" element={<Profile darkMode={darkMode} />} />
        <Route path="/posts" element={<PostsTab darkMode={darkMode} />} />
        <Route path={`/posts/starting-in-tech`} element={<Post1 darkMode={darkMode} />} />
        <Route path={`/posts/git-rid-of-it`} element={<Post2 darkMode={darkMode} />} />
        {/* JUST LIKE THE ABOVE FOR POST ID, CREATE INDIVIDUAL COMPONENTS AND SUGGEST THEIR PATHWAYS. LATER, YOU MIGHT FIGURE OUT A SHORTCUT */}
        <Route path="/about" element={<About darkMode={darkMode} />} />
        <Route path="/tags" element={<Tags darkMode={darkMode} />} />
        <Route path={`/tags/git/git`} element={<gitTag darkMode={darkMode} />} />
        <Route path="*" element={<Error404 darkMode={darkMode} />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  )
}
export default App;