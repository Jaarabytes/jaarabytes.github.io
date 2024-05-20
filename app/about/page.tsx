// This is the about tab, don't get confused bozo

export default function AboutPage () {
    const interests = ["infosec (especially web3)", "anime", "Kyle Broslovski", "finance", "and music"]

    return (
        <>
        <h1>About?</h1>
        <p>Hey, I do frontend, little backend and blockchain</p>
        <p>Other interests include {interests.map((elem, index) => 
        <>
        <span key={index}>
            {elem}
            {index < interests.length - 1 && ', '}
        </span>
        </>)}</p>
        <p>If you are reading this, feel free to send me a message! Dm me on <a
        href="https://twitter.com/jaarabytes"
        className="hover: underline hover:text-red-400"
        target="_blank"
        >twitter</a> or <a
        href="mailto:xavierandole@gmail.com"
        className="hover: underline hover:text-red-400"
        target="_blank"
        >mail me!</a></p>
        </>
    )
}