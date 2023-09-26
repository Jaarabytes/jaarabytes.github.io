import "./components.css";

function Profile(){
    return(
        <div className="py-5 px-3 text-center">
            <div className="my-5">
                <img className="rounded-full mx-auto h-[150px] w-[150px]" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjwRujGBN1FLnqeZdSGYTJg-exZcSy2v7x9A&usqp=CAU' alt="profile picture"></img>
            </div>
            <div className="my-5">
                <p className="font-bold text-3xl py-3">Andole Xavier</p>
                <p className="text-xl py-3">Bug bounty hunter</p>
                <p>A train stops at the train station, and a bus stops at the bus station. Well, I have a workstation.</p>

                {/* ADD THE LINKS ANIMATION */}
            </div>
            <div className="inline my-[30px]">
                <a target="_blank" rel="noreferrer" href="https://twitter.com/xh3rking"><i className="fa-brands fa-twitter text-2xl pr-4"></i></a>
                <a target="_blank" rel="noreferrer" href="https://youtu.be/dQw4w9WgXcQ?si=b8rWPl0lqxxSPXWD"><i className="fab fa-youtube text-xl pr-4"></i></a>
                <a target="_blank" rel="noreferrer" href="https://github.com/jaarabytes"><i className="fab fa-github text-xl pr-4"></i></a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/andole-xavier-a83929287/"><i className="fa-brands fa-linkedin text-xl pr-4"></i></a>
            </div>
        </div>
    )
}

export default Profile;