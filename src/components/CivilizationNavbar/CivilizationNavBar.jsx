import React from "react";
import { NavLink, useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import '../../styles/CivilizationNavBar.css';

function CivilizationNavBar({ civilizationTitle }) {
    const { lang, civilizationName } = useParams();
    const { t } = useTranslation();

    const navLinks = [
        {
            to: `/${lang}/civilization/${civilizationName}/`,
            label: civilizationTitle || t('civilizationNavbar.home'), // Usa el título de la civilización o "Home"
            end: true, // Para que solo sea activo en la ruta exacta /home
        },
        {
            to: `/${lang}/civilization/${civilizationName}/myths`,
            label: t('civilizationNavbar.myths'),
        },
        {
            to: `/${lang}/civilization/${civilizationName}/history`,
            label: t('civilizationNavbar.history'),
        },
        {
            to: `/${lang}/civilization/${civilizationName}/art`,
            label: t('civilizationNavbar.art'),
        },
    ];

    return (
        <nav className="civilization-navbar">
            <Link to={`/${lang}`} className='navbar-back-button'>
                &#x2190;
            </Link>
            <ul>
                {navLinks.map((link) => (
                    <li key={link.to}>
                        <NavLink
                            to={link.to}
                            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                            end={link.end}
                        >
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default CivilizationNavBar