// To be imported to the main page
import { Metadata } from "next"

export const metadata : Metadata = {
    title : "about"
}

export default function AboutPage () {
    const creations = [{link : "https://jipime.vercel.app", name: "jipime", description: "Ever thought how high IQ you are?"}, 
    {link : "https://streamwan.vercel.app", name: "streamwan", description: "Wi-Fi connection B2B/B2C service."}]
    
    return (
        <>
            <h1>About?</h1>
            <p>Front, back, db, containers & blockchain</p>
            <p>I can fix a printer</p>
            <p className="mt-5">If you are reading this, feel free to send me a message! Dm me on <a
            href="https://twitter.com/jaarabytes"
            className="hover: underline hover:text-red-400"
            target="_blank"
            >twitter</a> or <a
            href="mailto:xavierandole@gmail.com"
            className="hover: underline hover:text-red-400"
            target="_blank"
            >mail me!</a></p>
            <h1 className="mt-5">Buildings: </h1>
            <div className="mx-3">
                {creations.map((element, index) => (
                    <dl key={index} className="mt-3">
                        <dt><a href={element.link} className="underline text-red-400" target="_blank">{element.name}</a></dt>
                        <dd>{element.description}</dd>
                    </dl>
                ))}
            </div>
            <p className="my-10">there&apos;s a lot left to discover, build and enjoy – feel free to <a href="https://x.com/jaarabytes" 
            className="text-red-400 underline">message me</a> and say hi if you got this far, I don&apos;t bite (unless angered)</p>
        </>
    )
}