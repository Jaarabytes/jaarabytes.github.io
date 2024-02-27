import React from "react";
const About = () => {
    const skills = [
        {
            type:"Front end web development:",
            tools:["HTML5, ","CSS, ", "Sass, ", "Javascript, ", "Typescript, " , "JQuery, ", "React, ", "Svelte, ", "Bootstrap, ", "Tailwind"]
        },
        {
            type: "Programming languages:",
            tools: ["Bash, ", "Python, ", "Java, ", "C, ", "Solidity"]
        }
    ];

    const certifications = [
        {
            name: "Javascript Algorithms and data structures",
            provider: "Free Code Camp",
            link : "https://www.freecodecamp.org/certification/XavierAndole/javascript-algorithms-and-data-structures",
            date : "1st August 2023"
        }
    ]
    return(
        <div className="px-5 my-5 sm:px-[20%]">
            <h1 className="text-3xl font-extrabold">Skills:</h1>
            <dl>
                {skills.map((elem, index) => (
                    <React.Fragment key={index}>
                    <dt className="text-xl py-3 font-semibold">{elem.type}</dt>
                    <dd className="text-lg py-2 text-red-400">{elem.tools}</dd>
                    </React.Fragment>
                ))}
            </dl>
            <br></br>
            <h1 className="text-3xl font-extrabold py-5">Certifications: </h1>
            {certifications.map((val, index) => (
                <>
                <p key={index} className="text-xl font-semibold">{val.name}</p>
                <a href={val.link} target="_blank" rel="noreferrer" className="text-red-400 py-2" key={val}>{val.provider}</a>
                <p>{val.date}</p>
                </>
            ))}
            {/* DISPLAY CERTIFICATIONS HERE */}
        </div>
    )
}
export default About;