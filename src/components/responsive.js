import { useState } from "react";

export const Responsive = () => {
    // FOR RESPONSIVENESS
    const [isMenuOpen, setMenuOpen ] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    }
    return [isMenuOpen, toggleMenu];
}