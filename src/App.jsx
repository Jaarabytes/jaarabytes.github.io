import './App.css'
import Navbar from './components/navbar'
import Profile from './components/profile'
import About from './components/about'
import Tags from './components/tags'
import PostsTab from './components/postsTab'
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom'
import Error404 from './components/error404'
import { useDarkModeToggle } from './components/toggleDarkMode'
import { Responsive } from './components/responsive'
import FullPost from './components/fullPost'


function App() {
  const [darkMode, toggleDarkMode] = useDarkModeToggle();
  const containerClassName = darkMode ? 'darker' : 'lighter';

  const [isMenuOpen, toggleMenu] = Responsive();

  return (
    <div className={ containerClassName } style={{minHeight:'100vh'}}>
    <Router >
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Routes>
        <Route path="/" element={<Profile darkMode={darkMode} />} />
        <Route path="/posts" element={<PostsTab />} />
        <Route path="/posts/:postId" element={<FullPost />} />
        <Route path="/about" element={<About />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
    </div>
  )
}
export default App;
