import './App.css'
import Navbar from './components/navbar'
import Profile from './components/profile'
import About from './components/about'
import Tags from './components/tags'
import PostsTab from './components/postsTab'
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom'
import Error404 from './components/error404'

function App() {

  return (
    <Router >
      <Navbar />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/posts" element={<PostsTab />} />
        <Route path="/about" element={<About />} />
        <Route path="/tags" element={<Tags />} />
        <Route element={<Error404 />} />
      </Routes>
    </Router>
  )
}
export default App;
