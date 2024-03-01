import "./components.css";
import PropTypes from 'prop-types'

function Profile({darkMode}){    
    return(
        <div className={`py-5 px-3 text-center`}>
            <div className="my-5">
                {/* //return the old pfp or use a sharingan image; */}
                <img className="rounded-full mx-auto h-[150px] w-[150px]" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6QaDOA1lXrctLwGMmQ9FCY4jIT2QWvc7VLA&usqp=CAU' alt="profile picture"></img>
            </div>
            <div className="my-5">
                <p className={`font-bold text-3xl py-3 ${darkMode ? 'text-neon' : ''}`}>XCII</p>
                <p className={`text-xl py-3 ${darkMode ? "text-red-700" : ''}`}>Security researcher. I think</p>
                <p>A train stops at the train station, and a bus stops at the bus station. Well, I have a workstation.</p>

                {/* ADD THE LINKS ANIMATION */}
            </div>
            <div className="inline my-[30px]">
                <a target="_blank" rel="noreferrer" href="https://twitter.com/xh3rking"><i className="fa-brands fa-twitter text-2xl pr-4 hover:text-neon"></i></a>
                <a target="_blank" rel="noreferrer" href="https://youtu.be/dQw4w9WgXcQ?si=b8rWPl0lqxxSPXWD"><i className="fab fa-youtube text-xl pr-4 hover:text-neon"></i></a>
                <a target="_blank" rel="noreferrer" href="https://github.com/jaarabytes"><i className="fab fa-github text-xl pr-4 hover:text-neon"></i></a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/andole-xavier-a83929287/"><i className="fa-brands fa-linkedin text-xl pr-4 hover:text-neon"></i></a>
            </div>
        </div>
    )
}

Profile.propTypes = {
    darkMode: PropTypes.bool.isRequired
}

export default Profile;
