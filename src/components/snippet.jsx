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
        <div className="border border-slate-200/20"
        style={{
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px"
        }}
        >
        <div style={{
                display: "flex",
                justifyContent: "space-between",
                position: "relative",
                padding: "10px",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
            }}
            className={darkMode ? "bg-gray-700 text-sm" : "bg-gray-200 text-sm"}
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
            className={darkMode ? "hover:text-neon text-sm": "hover:text-red-400 text-sm"}
            onClick={handleCopy}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
                {copied ? "Copied!" : "Copy" }
            </button>
        </div>
        <div style={{
            overflow: "auto",
            padding: "13px",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px"
        }}
        className={darkMode ? "bg-neutral-950" : "bg-gray-300"}
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