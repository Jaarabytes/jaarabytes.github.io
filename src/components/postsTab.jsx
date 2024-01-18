import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const PostsTab = ({darkMode}) => {
    // NAVIGATION LINKS AND PROPERTIES FOR EVERY BLOG POST I HAVE WRITTEN
    const posts = [
      {
        id:1,
        header: "Starting in tech",
        path: "starting-in-tech",
        date: "27th September 2023",
        read: "2 min",
        tags: ["newbie ", 'beginner-friendly ', ' career-advice']
      }
    ]
    return (
      <>
        <h1 className="text-3xl bold my-5 text-center">Posts:</h1>
        <div className="flex place-items-center justify-center">
            {posts.map((elem) => (
              <div
                key={elem.id}
                className={`${darkMode ? 'bg-gray-600' : ' bg-gray-300'} rounded-lg p-5 sm:w-[60%] w-[90%] transform hover:scale-110 transition-transform duration-300 ease-in-out`}
              >
              
                <Link to={`/posts/${elem.path}`}
                 className={`text-2xl font-bold hover:text-red-700 ${darkMode ? 'text-neon' : ''}`}>
                  {elem.header}
                </Link>
                <div className="flex my-3">
                <p className="text-xs">{elem.date}</p>
                <p className="text-xs px-5">{elem.read}</p>
                </div>
                {/* MAP THE TAGS IF POSSILE */}
                <div className="flex flex-wrap flex-row justify-start">
                {elem.tags.map((values) => (
                  <p className={`text-xs m-2 px-2 ${darkMode ? 'bg-green-700 rounded-lg text-neon' : 'bg-gray-500 rounded-lg'}`}
                   key={values}>{values}</p>
                ))}
                </div>
              </div>
            ))}
        </div>
        </>
      );
}
PostsTab.propTypes = {
  darkMode: PropTypes.bool.isRequired
}


export default PostsTab;