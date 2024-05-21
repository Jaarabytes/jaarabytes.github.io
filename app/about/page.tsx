// To be imported to the main page
export default function AboutPage () {
    const interests = ["infosec (especially web3)","literature", "Attack on titan", "Ludovico Eunadi", "finance", "and The legend of korra"]
    const music = [{link: "https://open.spotify.com/playlist/4sNiUUrxothKlARvtcbjkU?si=5XeFsXNEREaG8RPfRPEL9A&utm_source=copy-link", name: "storytelling"},
                    {link: "https://open.spotify.com/playlist/3jhVe6KnUKOccv3um56FP8?si=HWQJEV4jQYSR37UNFOUtBg&utm_source=copy-link", name: "jazz"},
                    {link: "https://open.spotify.com/playlist/2qXjPCmMuGRlVDRRFFetAs?si=uy6K2tOpSUedQF8dz16elA&utm_source=copy-link", name: "experience vibes"},
                    {link: "https://open.spotify.com/playlist/4y85MI3qRoui5GPSHWl8Op?si=0og1UeQUQo6fb-9Ds4bMYw&utm_source=copy-link", name: "nostalgia"},
    ]
    const creations = [{link : "https://streamwan.vercel.app", name: "streamwan"}]
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
            <p>What i have learned so far is that nothing matters, just do stuff, and if you're scared do it scared! the regret of inaction is always &gt; that of inaction</p>
            {/* Provide spotify links to proper playlists */}
            <p className="mt-5">Good music: </p>
            {music.map((element, index) => (
                <dl>
                    <li key={index}><a href={element.link} className="hover:underline hover:text-red-400" target="_blank">{element.name}</a></li>
                </dl>
            ))}
            <h1 className="mt-5">My creations: </h1>
            {creations.map((element, index) => (
                <dl>
                     <li key={index}><a href={element.link} className="hover:underline hover:text-red-400" target="_blank">{element.name}</a></li>
                </dl>
            ))}
            {/* Add certifications and resume possibly */}
            <p className="mt-5">Further reading: </p>
            <p className="mb-10">there&apos;s a lot left to discover, build and enjoy – feel free to <a href="https://x.com/jaarabytes" 
            className="text-red-400 underline">message me</a> and say hi if you got this far, I don&apos;t bite (unless angered)</p>
        </>
    )
}