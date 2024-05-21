// This is the thoughts tab, don't get confused bozo
import Navbar from "@/app/ui/Navbar"
import { Metadata } from "next"

export const metadata : Metadata = {
    title : "#thinking"
}


export default function ThoughtsTab () {
    const literature = [{author: "Leo Tolstoy", book: "War and peace"},{author: "David Foster Wallace", book: "Infinite Jest"},
    {author: "Thomas Pynchon", book: "Gravity's rainbow"},{author: "James Joyce", book: "A portrait of the artist as a young man"},
    {author: "Fitzgerald", book: "Tender is the night"},{author: "Max Gilbert", book: "All quiet on the western front"}]

    return (
        <>
            <div className="mt-5 px-[20%]">
                <Navbar />
                <h1 className="my-5 text-red-400">#Thinking</h1>
                <a></a>
                <p>I&apos;ll build an IQ test app, just need a first job</p>
                <p>I like Bruce wayne, i think i want to be just like him</p>
                <p>I would also like to work at <a
                href="https://x.com/Pedroais2/status/1790776937947808045"
                className="underline hover:text-red-400"
                target="_blank"
                >OpenZeppelin</a></p>
                <p>How can I honestly say no to that?</p>
                <p>You should never care about your wakatime, you should be worried about your portfolio</p>
                <p>How much of it is invested in crypto? if it&apos;s &lt;64% you&apos;re not gonna make it </p>
                {/* Provide links to dantotsu manga app */}
                <p>You should read The Stranger by Albert Camus</p>
                <p>enjoy some manga too</p>
                <p>Literature i&apos;m planning to read: </p>
                {literature.map((element, index) => (
                    <dl key={index}>
                        <li>{element.book} by {element.author}</li>
                    </dl>
                ))}
            </div>
        </>
    )
}