// To be imported to the main page
import { Metadata } from "next"

export const metadata : Metadata = {
    title : "about"
}

export default function AboutPage () {
    const interests = ["infosec (especially web3)","literature", "Attack on titan", "Ludovico Eunadi", "finance", "and The Sopranos"]
    const music = [{link: "https://open.spotify.com/playlist/4sNiUUrxothKlARvtcbjkU?si=5XeFsXNEREaG8RPfRPEL9A&utm_source=copy-link", name: "storytelling"},
                    {link: "https://open.spotify.com/playlist/3jhVe6KnUKOccv3um56FP8?si=HWQJEV4jQYSR37UNFOUtBg&utm_source=copy-link", name: "jazz"},
                    {link: "https://open.spotify.com/playlist/2qXjPCmMuGRlVDRRFFetAs?si=uy6K2tOpSUedQF8dz16elA&utm_source=copy-link", name: "experience vibes"},
                    {link: "https://open.spotify.com/playlist/4y85MI3qRoui5GPSHWl8Op?si=0og1UeQUQo6fb-9Ds4bMYw&utm_source=copy-link", name: "nostalgia"},
    ]
    const creations = [{link : "https://streamwan.vercel.app", name: "streamwan"}]
    const relevantLinks = [{link: "https://www.coursera.org/learn/learning-how-to-learn", name: "quick learning"},
        {link: 'https://www.google.com/search?q=A+Mind+For+Numbers%3A+How+to+Excel+at+Math+and+Science&sca_esv=8ee0a4bf7d87b514&sxsrf=ADLYWIJQGPluYmXbjw0mQdbezpn3lPtgwQ%3A1716282706177&ei=UmVMZuCgCqr2i-gPvMqsgAk&ved=0ahUKEwjgkaSos56GAxUq-wIHHTwlC5AQ4dUDCBA&uact=5&oq=A+Mind+For+Numbers%3A+How+to+Excel+at+Math+and+Science&gs_lp=Egxnd3Mtd2l6LXNlcnAiNEEgTWluZCBGb3IgTnVtYmVyczogSG93IHRvIEV4Y2VsIGF0IE1hdGggYW5kIFNjaWVuY2UyBBAjGCcyBBAjGCcyCxAuGIAEGJECGIoFMgUQABiABDIFEAAYgAQyBBAAGB4yCxAAGIAEGIYDGIoFMgsQABiABBiGAxiKBTIIEAAYgAQYogRI5hRQLVi3CHABeAGQAQCYAdcDoAGHEqoBBzItMy4zLjG4AQPIAQD4AQGYAgOgArcEwgIKEAAYsAMY1gQYR8ICBRAuGIAEmAMAiAYBkAYIkgcFMS4wLjKgB9U6&sclient=gws-wiz-serp', name: 'solving math'},
        {link : 'https://x.com/yacineMTB/status/1789787186763530449', name:"yacineMTB W"}
    ]
    return (
        <>
            <h1>About?</h1>
            <p>Hey, I do frontend, little backend and blockchain</p>
            <p>I can fix a printer</p>
            <p>Other interests include {interests.map((elem, index) => 
            <>
            <span key={index}>
                {elem}
                {index < interests.length - 1 && ', '}
            </span>
            </>)}</p>
            <p className="mt-5">If you are reading this, feel free to send me a message! Dm me on <a
            href="https://twitter.com/jaarabytes"
            className="hover: underline hover:text-red-400"
            target="_blank"
            >twitter</a> or <a
            href="mailto:xavierandole@gmail.com"
            className="hover: underline hover:text-red-400"
            target="_blank"
            >mail me!</a></p>
            <p>What i have learned so far is that nothing matters, just do stuff, and if you&apos;re scared do it scared! the regret of inaction is always &gt; that of inaction</p>
            <p>&ldquo;A ship is safe in harbor, but that&apos;s not what ships are for&ldquo; ~William G.T Shedd</p>
            <p>Goku faced more and did not give up, what of you?</p>
            <p className="mt-5">🇰🇪🇰🇪🇰🇪🇰🇪 leads Africa in tech</p>
            <p className="mt-5">Good music: </p>
            {music.map((element, index) => (
                <dl key={index}>
                    <li><a href={element.link} className="hover:underline hover:text-red-400" target="_blank">{element.name}</a></li>
                </dl>
            ))}
            <h1 className="mt-5">My creations: </h1>
            {creations.map((element, index) => (
                <dl key={index}>
                     <li><a href={element.link} className="hover:underline hover:text-red-400" target="_blank">{element.name}</a></li>
                </dl>
            ))}
            {/* Add certifications and resume possibly */}
            <p className="mt-5">Motivators (relevant links that are to be studied thoroughly): </p>
            {relevantLinks.map((element, index) => (
                <dl key={index}>
                     <li><a href={element.link} className="hover:underline hover:text-red-400" target="_blank">{element.name}</a></li>
                </dl>
            ))}
            <p className="my-10">there&apos;s a lot left to discover, build and enjoy – feel free to <a href="https://x.com/jaarabytes" 
            className="text-red-400 underline">message me</a> and say hi if you got this far, I don&apos;t bite (unless angered)</p>
        </>
    )
}