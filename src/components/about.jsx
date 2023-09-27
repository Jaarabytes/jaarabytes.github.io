import React from "react";
const About = () => {
    const skills = [
        {
            type:"Front end web development:",
            tools:["HTML5, ","CSS, ", "Sass, ", "Javascript, ", "JQuery, ", "React, ", "Svelte, ", "Redux, ", "Bootstrap, ", "Tailwind"]
        },
        {
            type: "Data structures and algorithms(I'm still studying lol 😊):",
            tools: ["C, ", "Python, ", "Php"]
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
            
            <h1 className="text-3xl font-bold my-5">Education:</h1>
            <h1 className="py-3">Mount Kenya University</h1>
            <p className="py-3">Bachelor of Commerce and Finance</p>
            <p className="py-3">2023-2026</p>
            <h1 className="text-3xl font-bold my-5">Certifications:</h1>
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