import React from "react";
import { useTranslation } from "react-i18next";
import ParagraphBlock from "../components/ParagraphBlock/ParagraphBlock";

import '../styles/CivilizationHomeSection.css'

function CivilizationHomeSection({ contentKey }) {
    const { t } = useTranslation();
    const content = t(contentKey);

    console.log(content, 'content')

    if (!content) {
        return <p>{t('general.sectionNotFoundMessage')}</p>
    }

    return (
        <div className="civilization-section home-section">
            <ParagraphBlock content={content} />
        </div>
    );
}

export default CivilizationHomeSection;