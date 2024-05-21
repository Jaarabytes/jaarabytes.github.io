import Image from "next/image"
import Navbar from "@/app/ui/Navbar"
import AboutPage from "@/app/about/page"

export default function Home () {

  return (
    <>
    {/* at posts, add naming git messages */}
    {/* Add a theme song (Hunter x hunter departure or the World deathnote) */}
    {/* add your about here */}
      <div className="mt-5 px-[20%]">
          <Navbar />
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
          <div className="block mb-5">
            <a
            className="hover:underline hover:text-red-400 block"
            target="_blank"
            href="https://twitter.com/jaarabytes"
            >bird app ?</a>
            <a
            className="hover:underline hover:text-red-400 block pb-3"
            target="_blank"
            href="https://github.com/jaarabytes"
            >you build ?</a>
            <hr />
          </div>
          <AboutPage />
        </div>
    </>
  )
}