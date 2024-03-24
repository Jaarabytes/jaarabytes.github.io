import React, { useState, useRef } from "react";
import propTypes from "prop-types";

function Snippet({code, language}){
    // Copying content into the clipboard for users
    const codeRef = useRef(null);
    const [copied, setCopied] = useState(false);
    // Styling the codeSnippet component
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    const handleCopy = () => {
        if(codeRef.current) {
            navigator.clipboard.writeText(codeRef.current.innerText);
            setCopied(true);
            // setTimeout(() => setCopied((false), 2000));
        }
    };

    return(
        <>
        <div style={{
            overflow: "auto",
            // backgroundColor: "rgb(17 24 0)",
            padding: "20px",
            borderRadius: "10px"
        }}
        // className={`${darkMode ? "bg-gray-800" : "bg-slate-400"} text-slate-50`}
        >
            <div style={{
                display: "flex",
                justifyContent: "space-between"
            }}
            >
            <span>
                {language}
            </span>
            <button
            style={{
                transition: "background-color 0.5s ease",
                
            }}
            className={isHovered ? "bg-red-400" : ''}
            onClick={handleCopy}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
                {copied ? "Copied!" : "Copy" }
            </button>
            </div>
            <pre>
                <code ref={codeRef}>
                    {code}
                </code>
            </pre>
        </div>
        </>
    )
}

// Post2.propTypes = {
//     darkMode : propTypes.bool.isRequired
// }

export default Snippet;