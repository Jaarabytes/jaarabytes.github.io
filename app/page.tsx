


export default function Home () {
  // I will map you out later
  const relevantLinks = [{ name : "home", path : "/" }, { name : "posts", path : "/posts" },{ name : "thoughts",path : "/thoughts"},{ name : "about", path: "/about"}]

  return (
    <>
      <h1>Xavier</h1>
      <p>Working on da blockchain</p>
      <a
      className="hover:underline hover:text-red-400"
      target="_blank"
      href="https://twitter.com/jaarabytes"
      >bird app</a>
    </>
  )
}