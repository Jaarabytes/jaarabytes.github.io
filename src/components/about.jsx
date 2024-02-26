import React from "react";
const About = () => {
    const skills = [
        {
            type:"Front end web development:",
            tools:["HTML5, ","CSS, ", "Sass, ", "Javascript, ", "Typescript, " , "JQuery, ", "React, ", "Svelte, ", "Bootstrap, ", "Tailwind"]
        },
        {
            type: "Proficient in:",
            tools: ["Bash, ", "Python, ", "Java, ", "C, ", "Solidity"]
        }
    ];

    const certifications = [
        {
            name: "Javascript Algorithms and data structures",
            provider: "Free Code Camp",
            link : "https://www.freecodecamp.org/certification/XavierAndole/javascript-algorithms-and-data-structures",
        }
    ]
    return(
        <div className="my-5 px-5">
            <h1 className="text-3xl font-extrabold">Skills:</h1>
            <dl>
                {skills.map((elem, index) => (
                    <React.Fragment key={index}>
                    <dt className="text-xl py-3 font-semibold">{elem.type}</dt>
                    <dd className="text-lg py-2 text-red-400">{elem.tools}</dd>
                    </React.Fragment>
                ))}
            </dl>
            
            {certifications.map((val, index) => (
                <>
                <p key={index} className="text-2xl py-3 font-semibold">{val.name}</p>
                <p key={val} className="text-lg py-2">{val.provider}</p>
                <a href={val.link} target="_blank" rel="noreferrer" className="text-red-400 py-2">See credential</a>
                </>
            ))}
            {/* DISPLAY CERTIFICATIONS HERE */}
        </div>
    )
}
export default About;