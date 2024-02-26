import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const PostsTab = ({darkMode, Responsive, toggleMenu, isMenuOpen}) => {
    // NAVIGATION LINKS AND PROPERTIES FOR EVERY BLOG POST I HAVE WRITTEN
    const posts = [
      {
        id:1,
        header: "Reminder to self",
        path: "starting-in-tech",
        date: "27th September 2023",
        read: "2 min",
      },
      {
      id:2,
      header: "Git rid of it",
      path: "git-rid-of-it",
      date: "14th February 2024",
      read: "5 min"
      }
    ]
    return (
      <>
        <h1 className={`text-3xl bold my-5 ${Responsive ? '' : 'pl-96'}`}><b>Posts:</b></h1>
        <div className={`block w-3/5 ${Responsive ? '' : 'pl-96'}`}>
            {posts.reverse().map((elem) => (
              <div
                key={elem.id}
                className={`${darkMode ? '' : ''} py-2`}
              >
              
                <Link to={`/posts/${elem.path}`}
                 className={`text-2xl font-bold hover:text-red-700 ${darkMode ? 'text-neon' : ''}`}>
                  {elem.header}
                </Link>
                <div className="flex my-3">
                <p className="text-xs">{elem.date}</p>
                <p className="text-xs px-5">{elem.read}</p>
                </div>
                <div className="flex flex-wrap flex-row justify-start">
                </div>
              </div>
            ))}
        </div>
        </>
      );
}
PostsTab.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired
}
export default PostsTab;