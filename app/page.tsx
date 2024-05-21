import Image from "next/image"
import Link from "next/link"

export default function Home () {
  // I will map you out later
  const relevantLinks = [{ name : "home", path : "/" }, { name : "posts", path : "/posts" },{ name : "thoughts",path : "/thoughts"},{ name : "about", path: "/about"}]

  return (
    <>
    {/* at posts, add naming git messages */}
    {/* Add a theme song (Hunter x hunter departure or the World deathnote) */}
    {/* add your about here */}
      <div className="mt-5 text-center px-[20%]">
        <Image
        src="/kurapika.jpg"
          alt="That's literally me (I'm oozing aura)"
          width={200}
          height={200}
          className="items-center inline my-10"
          style={{borderRadius: "50%"}}
          />
        <h1>Xavier</h1>
        <p className="mb-5">(yes xavier is my real name)</p>
        <p className="mb-5">Working on da blockchain</p>
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
        <div className="flex justify-evenly text-center">
          {relevantLinks.map((element, index) => (
            <Link className="text-red-400" href={element.path} target="_self" key={index}>
              {element.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}