import { Link } from "react-router-dom";
import propTypes from 'prop-types';

const GrubTag = ({darkMode}) => {
    const grubPosts = [
      {
      id:1,
      header: "Minimal bash-like error",
      path: "minimal-bash-like-error",
      date: "3rd March 2024",
      read: "5 min"
      }
    ];
    return (
      <>
        <h1 className={`text-3xl bold my-5 mx-5 sm:px-[20%]`}><b>Posts:</b></h1>
        <div className={`mx-5 py-5 block sm:px-[20%]`}>
            {grubPosts.map((elem) => (
              <div
                key={elem.id}
                className={`py-2`}
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
GrubTag.propTypes = {
  darkMode: propTypes.bool.isRequired
}

export default GrubTag;