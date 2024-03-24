import React, { useState, useRef } from "react";
import { useDarkModeToggle } from "./toggleDarkMode";

function Snippet({code, language, darkMode}){
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
        <div>
        <div style={{
                display: "flex",
                justifyContent: "space-between",
                position: "relative",
                padding: "20px",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px"
            }}
            className={darkMode ? "bg-gray-700" : "bg-gray-200"}
            >
            <span>
                {language}
            </span>
            <button
            style={{
                transition: "color 0.5s ease",
                right: 0,
                position: "absolute",
                top: 0,
                padding: "10px"
            }}
            className={darkMode ? "hover:text-neon": "hover:text-red-400"}
            onClick={handleCopy}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
                {copied ? "Copied!" : "Copy" }
            </button>
        </div>
        <div style={{
            overflow: "auto",
            padding: "20px",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px"
        }}
        className={darkMode ? "bg-gray-800 " : "bg-gray-300"}
        >
            <pre>
                <code ref={codeRef}>
                    {code}
                </code>
            </pre>
        </div>
        </div>
        </>
    )
}

// Post2.propTypes = {
//     darkMode : propTypes.bool.isRequired
// }

export default Snippet;