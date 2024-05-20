import Image from "next/image"


export default function Home () {
  // I will map you out later
  const relevantLinks = [{ name : "home", path : "/" }, { name : "posts", path : "/posts" },{ name : "thoughts",path : "/thoughts"},{ name : "about", path: "/about"}]

  return (
    <>
      <Image
       src="/public/profilepic.jpeg"
        alt="That's literally me (I'm oozing aura)"
        width={200}
        height={200}
        className=""
        />
      <h1>Xavier</h1>
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