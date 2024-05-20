import Image from "next/image"


export default function Home () {
  // I will map you out later
  const relevantLinks = [{ name : "home", path : "/" }, { name : "posts", path : "/posts" },{ name : "thoughts",path : "/thoughts"},{ name : "about", path: "/about"}]

  return (
    <>
    {/* Add a theme song (Hunter x hunter departure or the World deathnote) */}
      <img
       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6QaDOA1lXrctLwGMmQ9FCY4jIT2QWvc7VLA&usqp=CAU"
        alt="That's literally me (I'm oozing aura)"
        width={200}
        height={200}
        className=""
        style={{borderRadius: "50%"}}
        />
      <h1>Xavier</h1>
      <p>(yes xavier is my real name)</p>
      <p>Working on da blockchain</p>
      <div className="block">
        <a
        className="hover:underline hover:text-red-400 block"
        target="_blank"
        href="https://twitter.com/jaarabytes"
        >bird app ?</a>
        <a
        className="hover:underline hover:text-red-400 block"
        target="_blank"
        href="https://github.com/jaarabytes"
        >you build ?</a>
      </div>
    </>
  )
}