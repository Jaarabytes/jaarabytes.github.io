import Image from "next/image"
import Navbar from "@/app/ui/Navbar"
import AboutPage from "@/app/ui/About"

import { Metadata } from "next"

export const metadata : Metadata = {
    title : "jaarabytes"
}

export default function Home () {

  return (
    <>
    {/* at posts, add naming git messages */}
    {/* Add a theme song (Hunter x hunter departure or the World deathnote) */}
      <div className="mt-5 sm:px-[20%]  px-5">
          <Navbar />
          <Image
          style={{height: "auto", width: "auto",borderRadius: "50%"}}
          priority
          src="/kurapika.jpg"
            alt="That's literally me (I'm oozing aura)"
            width={200}
            height={400}
            className="items-center inline my-10"
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
            <a
            className="hover:underline hover:text-red-400 block pb-3"
            target="_self"
            href={`/about/bananas.mp4`}
            >what i look like ?</a>
            <hr />
          </div>
          <AboutPage />
        </div>
    </>
  )
}