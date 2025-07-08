import React from "react";
import '../styles/Footer.css';

export const Footer = () => {
    return (
        <footer className="footer-container">
            Designed & developed &gt;{" "}
            <a href="https://github.com/RobertFacundo"
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
            >
                Robert
            </a>
        </footer>
    )
}