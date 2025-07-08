import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ReactMarkdown from 'react-markdown';

import '../../styles/CarouselItem.css';

function CarouselItem({ civilization }) {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;

    const navToUrl = `/${currentLanguage}/civilization/${civilization.slug}/`;

    return (
        <div className="carousel-item">
            <Link to={navToUrl} className="carousel-item-link">
                <img className="carousel-item-img " src={civilization.image} alt={civilization.titleKey} />
                <span className="carousel-item-description">
                    <ReactMarkdown>{t(civilization.descriptionKey)}</ReactMarkdown>
                </span>
            </Link>
        </div>
    );
};

export default CarouselItem;