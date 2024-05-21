
import Link from "next/link"

export default function Navbar () {
    const relevantLinks = [{ name : "home", path : "/" }, { name : "posts", path : "/posts" },{ name : "thoughts",path : "/thoughts"}]

    return (
        <>
            <div className="flex text-center">
            {relevantLinks.map((element, index) => (
              <Link className="text-red-400 pr-5" href={element.path} target="_self" key={index}>
                {element.name}
              </Link>
            ))}
          </div>
        </>
    )
}